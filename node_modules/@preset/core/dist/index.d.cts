import { ConfigValues, SimpleGit } from 'simple-git';
import { Promisable, JsonObject, LastArrayElement } from 'type-fest';
import * as mitt from 'mitt';

type Code = 'ERR_NOT_RESOLVED' | 'ERR_PRESET_FILE_NOT_FOUND' | 'ERR_PRESET_FAILED' | 'ERR_ACTIONS_FAILED' | 'ERR_ACTION_FAILED' | 'ERR_MISSING_CONTEXT' | 'ERR_PRESET_NO_EXPORT' | 'ERR_INVALID_PRESET' | 'ERR_CLONE_PRESET';
interface PresetErrorOptions {
    code: Code;
    details: string;
    parent?: Error;
}
declare class PresetError extends Error {
    code: Code;
    details: string;
    parent?: Error;
    constructor(error: PresetErrorOptions);
}

type ActionResult = boolean;
type ActionHandlerParameters<ResolvedOptions> = {
    /**
     * The current preset's context.
     */
    presetContext: PresetContext;
    /**
     * The current action's context.
     */
    actionContext: ActionContext;
    /**
     * Options given to this action.
     */
    options: ResolvedOptions;
    /**
     * The current action's name.
     */
    name: Readonly<string>;
};
type RequiredKeys<T> = {
    [K in keyof T]-?: ({} extends {
        [P in K]: T[K];
    } ? never : K);
}[keyof T];
type ActionHandler<T> = (parameters: ActionHandlerParameters<T>) => Promisable<ActionResult>;
type ActionOptions<T> = T extends undefined ? Pick<ActionContext, 'title'> : (T & Pick<ActionContext, 'title'>);
type Action<T> = RequiredKeys<T> extends never ? (options?: ActionOptions<T>) => Promise<void> : (options: ActionOptions<T>) => Promise<void>;
type Colorize = (text: string) => string;
interface PostInstallCallbackOptions<Options extends PresetFlags> {
    /**
     * The preset context.
     */
    context: PresetContext<Options>;
    /**
     * A highlight callback.
     */
    hl: Colorize;
    /**
     * A bold callback.
     */
    b: Colorize;
}
type PostInstall<Options extends PresetFlags> = string[] | ((options: PostInstallCallbackOptions<Options>) => string[]);
type PresetResult = boolean | void;
type PresetFlags = {
    [name: string]: any;
};
type PresetHandler<Options extends PresetFlags> = (context: PresetContext<Options>) => Promise<PresetResult>;
interface Preset<Options extends PresetFlags = PresetFlags> {
    /**
     * Preset name.
     */
    name: string;
    /**
     * Default options for this preset.
     */
    options: Options;
    /**
     * Handler that executes this preset.
     */
    apply: (context: PresetContext<Options>) => Promise<boolean>;
    /**
     * Messages to write post-installation.
     */
    postInstall?: PostInstall<Options>;
}
/**
 * Represents the options that define a preset.
 */
interface DefinePresetOptions<Options extends PresetFlags = PresetFlags> {
    /**
     * The preset name.
     */
    name: string;
    /**
     * Default options for this preset.
     */
    options?: Options;
    /**
     * Handler that executes this preset.
     */
    handler: PresetHandler<Options>;
    /**
     * Messages to write post-installation.
     */
    postInstall?: PostInstall<Options>;
}
/**
 * Represents the status of an action or a preset.
 */
type Status = 'applying' | 'applied' | 'failed';
/**
 * Represents the context of an action.
 */
interface ActionContext<ResolvedOptions = ActionOptions<any>> {
    /**
     * A unique identifier.
     */
    id: string;
    /**
     * Resolved action options.
     */
    options: ResolvedOptions;
    /**
     * The ID of its context.
     */
    presetContextId: string;
    /**
     * The ID of its group action context.
     */
    groupContextId?: string;
    /**
     * The action name.
     */
    name: string;
    /**
     * When the action started.
     */
    start: number;
    /**
     * When the action ended.
     */
    end: number;
    /**
     * Action status.
     */
    status: Status;
    /**
     * Potential logs from the action.
     */
    log: string[];
    /**
     * Potential error.
     */
    error?: PresetError;
    /**
     * Optional title to display in the logs.
     */
    title?: string;
}
/**
 * Represents the context of a preset.
 */
interface PresetContext<Options extends PresetFlags = PresetFlags> {
    /**
     * A unique identifier.
     */
    id: string;
    /**
     * Preset name.
     */
    name: string;
    /**
     * Initial preset object.
     */
    preset: Readonly<Preset>;
    /**
     * Preset status.
     */
    status: Status;
    /**
     * Parsed command-line options.
     */
    options: Options;
    /**
     * Parsed command-line args.
     */
    args: readonly string[];
    /**
     * Git context.
     */
    git: {
        /**
         * Local git configuration.
         */
        config: ConfigValues;
        /**
         * Simple Git instance.
         */
        instance: SimpleGit;
    };
    /**
     * Apply options.
     */
    applyOptions: ApplyOptions;
    /**
     * Context count.
     */
    count: Readonly<number>;
    /**
     * When the preset started.
     */
    start: number;
    /**
     * When the preset ended.
     */
    end: number;
    /**
     * Action context log.
     */
    actions: ActionContext[];
    /**
     * Resolved local preset.
     */
    localPreset: LocalPreset;
    /**
     * Potential error.
     */
    error?: PresetError;
    /**
     * Prompt responses.
     */
    prompts: Record<string, string | undefined>;
}
interface ApplyOptions {
    /**
     * A string that resolves to a preset.
     */
    resolvable: string;
    /**
     * The *absolute* path to the directory in which to apply the preset.
     */
    targetDirectory: string;
    /**
     * The raw command-line arguments, without the first two from argv.
     */
    rawArguments: readonly string[];
    /**
   * List of parsed command line options.
   */
    parsedOptions: {
        /**
         * The path to a sub-directory in which to look for a preset.
         */
        path?: string;
        /**
         * The tag of the repository.
         */
        tag?: string;
        /**
         * Whether to use SSH.
         */
        ssh?: boolean;
        [k: string]: any;
    };
    /**
     * Context ID of the action that called this preset, if the preset is nested.
     */
    actionContextId?: string;
    /**
     * Applies the preset without using the global config.
     */
    withoutGlobalConfig?: boolean;
}
/**
 * Represents a resolved preset.
 */
type ResolvedPreset = RepositoryPreset | LocalFilePreset | LocalDirectoryPreset;
/**
 * Represents local filesystem information for the preset.
 */
interface LocalPreset {
    /**
     * The absolute path to the root directory of the preset
     */
    rootDirectory: string;
    /**
     * The absolute path to the preset file.
     */
    presetFile: string;
    /**
     * The version required by the preset.
     */
    presetVersion?: string;
}
/**
 * Represents a preset in a distant repository.
 */
interface RepositoryPreset {
    type: 'repository';
    organization: string;
    repository: string;
    ssh: boolean;
    path: string;
    tag?: string;
}
/**
 * Represents a preset in a local directory.
 */
interface LocalDirectoryPreset {
    type: 'directory';
    path: string;
}
/**
 * Represents a local file preset.
 */
interface LocalFilePreset {
    type: 'file';
    path: string;
}
interface PromptInput {
    id: string;
    actionContextId: string;
    isSelect: boolean;
    name: string;
    text: string;
    default?: string;
}
interface PromptSelect {
    id: string;
    actionContextId: string;
    isSelect: boolean;
    name: string;
    text: string;
    choices: Array<{
        title: string;
        value?: string;
    } | string>;
    initial?: number;
}
interface PromptResponse {
    id: string;
    response?: string;
}
type NodePackageManager = 'pnpm' | 'yarn' | 'npm' | 'bun';
interface PresetConfiguration {
    defaultNodeAgent: NodePackageManager;
    aliases: Record<string, ResolvedPreset>;
}

/**
 * Defines a preset.
 *
 * @param name The preset name.
 * @param preset The preset's script.
 */
declare function definePreset<Options extends PresetFlags>(preset: DefinePresetOptions<Options>): Preset<Options>;
/**
 * Defines an action handler.
 *
 * @param name The action name.
 * @param preset The action's script.
 */
declare function defineAction<Options extends Object, OptionsWithDefault extends Options = Options>(name: string, action: ActionHandler<OptionsWithDefault>, defaultOptions?: OptionsWithDefault): Action<Options>;

declare const emitter: mitt.Emitter<{
    'preset:resolve': LocalPreset;
    'preset:start': PresetContext;
    'preset:end': PresetContext;
    'preset:success': PresetContext;
    'preset:fail': PresetContext;
    'action:start': ActionContext;
    'action:end': ActionContext;
    'action:success': ActionContext;
    'action:fail': ActionContext;
    'prompt:input': PromptInput;
    'prompt:response': PromptResponse;
    'prompt:select': PromptSelect;
}>;

/**
 * Applies the given preset.
 */
declare function applyPreset(options: ApplyOptions): Promise<boolean>;

/**
 * Imports the given preset file.
 * @param filepath
 * @returns
 */
declare function importPresetFile(filepath: string): Promise<Preset<PresetFlags>>;

/**
 * Resolves the preset file and returns its path.
 */
declare function resolvePreset(options: ApplyOptions): Promise<LocalPreset>;
/**
 * Parses the given resolvable.
 */
declare function parseResolvable(options: ApplyOptions, cwd?: string): Promise<ResolvedPreset>;
/**
 * Resolves the short syntax for GitHub.
 *
 * @example organization/repository
 * @example organization/repository(at)tag
 * @example git(at)github.com:organization/repository
 */
declare function resolveGitHubRepository(options: ApplyOptions): Promise<RepositoryPreset | false>;
/**
 * Resolves a local directory.
 */
declare function resolveLocalDirectory(options: ApplyOptions, cwd: string): Promise<LocalDirectoryPreset | false>;
/**
 * Resolves a local file.
 */
declare function resolveLocalFile(options: ApplyOptions, cwd: string): Promise<LocalFilePreset | false>;
/**
 * Resolves an alias.
 */
declare function resolveAlias(options: ApplyOptions): Promise<ResolvedPreset | false>;
/**
 * Resolves a configured alias.
 */
declare function resolveConfiguredAlias(options: ApplyOptions): Promise<ResolvedPreset | false>;
/**
 * Resolves namespaced aliases.
 *
 * @example laravel:inertia => laravel-presets/inertia
 */
declare function resolveNamespacedAlias(options: ApplyOptions): Promise<RepositoryPreset | false>;
/**
 * Resolves the preset file in the given directory.
 *
 * @param directory Absolute path to the directory in which to find the preset file.
 */
declare function resolvePresetFile(directory: string, cwd?: string): Promise<LocalPreset>;
/**
 * Clones the repository to the disk.
 */
declare function cloneRepository(preset: RepositoryPreset, options: ApplyOptions): Promise<string>;

interface ExtractTemplatesOptions {
    /**
     * Defines the templates directory. Default is `templates`.
     */
    templates?: string;
    /**
     * Sets the source file or directory.
     */
    from?: string;
    /**
     * Sets the target file or directory.
     */
    to?: string;
    /**
     * Ignore templates file structure. Only works when extracting from a file to a directory.
     */
    flatten?: boolean;
    /**
     * Extract actual dotfiles in addition to `.dotfile` files.
     */
    extractDotFiles?: boolean;
    /**
     * Defines whether to override existing files or skip extraction.
     */
    whenConflict?: 'override' | 'skip';
}
/**
 * The `extractTemplates` action serves the common purpose of extracting files from the preset's template directory to the target directory.
 */
declare const extractTemplates: (options?: (ExtractTemplatesOptions & Pick<ActionContext<any>, "title">) | undefined) => Promise<void>;

interface ApplyNestedPresetOptions {
    /**
     * The preset resolvable that will be used.
     * For instance, `acme/laravel-preset` will use the `laravel-preset` repository of the `acme` GitHub organization.
     */
    preset: string;
    /**
     * Arguments to give to the preset, like they would be used in the command line, except each argument is an array item.
     */
    args?: string[];
    /**
     * Whether to inherit arguments that were given to the current preset.
     */
    inheritsArguments?: boolean;
}
/**
 * Applies another preset. It makes presets composable and reusable.
 */
declare const applyNestedPreset: (options: ApplyNestedPresetOptions & Pick<ActionContext<any>, "title">) => Promise<void>;

/**
 * Installs packages for the given environment, by calling the package manager directly via `execa`.
 * If you install multiple packages, you may want to pass them all to the `install` option instead of calling the action multiple times.
 */
declare const installPackages: (options?: (InstallPackagesOptions & Pick<ActionContext<any>, "title">) | undefined) => Promise<void>;
interface InstallPackagesOptions {
    /**
     * The environment for which to install the dependencies. Defaults to Node.
     */
    for?: 'node' | 'php';
    /**
     * The type of installation.
     */
    type?: 'install' | 'update';
    /**
     * The dependencies to install. Use `packages` instead.
     * @deprecated
     */
    install?: string | string[];
    /**
     * The dependencies to install.
     */
    packages?: string | string[];
    /**
     * For node, specify the package manager.
     */
    packageManager?: NodePackageManager;
    /**
     * Whether these are development dependencies.
     */
    dev?: boolean;
    /**
     * Additional arguments to give to the package manager.
     */
    additionalArgs?: string[];
}

interface ExecuteCommandOptions {
    /**
     * The command/process to execute.
     */
    command: string;
    /**
     * A list of arguments to pass to the process.
     */
    arguments?: string[];
    /**
     * A callback called each time stdout or stdin prints a line.
     */
    data?: (stdout: string) => void;
    /**
     * If true, exit code will be ignored.
     */
    ignoreExitCode?: boolean;
    /**
     * Environment variables for this command.
     */
    env?: Record<string, string>;
}
/**
 * Executes a shell command. This uses `execa` under the hood.
 */
declare const executeCommand: (options: ExecuteCommandOptions & Pick<ActionContext<any>, "title">) => Promise<void>;

/**
 * Applies one or multiple operations to the given files.
 */
declare const editFiles: (options: EditFilesOptions & Pick<ActionContext<any>, "title">) => Promise<void>;
interface AddLineOperation {
    type: 'add-line';
    /**
    * The lines to add.
    */
    lines: string | string[];
    /**
    * Indentation for this line addition.
        * If a number: will indent with the given amount of spaces.
        * If a string: will use the given string as indentation.
        * If true: will keep the indentation from the line before or after.
        * If false: will not indent.
    */
    indent?: number | string | boolean;
}
type AddLineWithMatchOperation = AddLineOperation & {
    /**
     * Whether to add the line before or after the matched line.
     */
    position: 'after' | 'before';
    /**
   * The line to match.
   */
    match: RegExp;
};
type AddLineAtOperation = AddLineOperation & {
    /**
     * Whether to prepend or append the line.
     */
    position: 'prepend' | 'append';
};
type AddLineAtIndexOperation = AddLineOperation & {
    /**
     * The index to which add the line.
     */
    position: number;
};
interface RemoveLineOperation {
    type: 'remove-line';
    /**
    * The line to match.
    */
    match: RegExp;
    /**
     * The index to start removing lines from. Defaults to 0.
     */
    start?: number;
    /**
     * The amount of lines to remove. Defaults to 1, can be negative to remove previous lines.
    */
    count?: number;
}
interface ReplaceVariablesOperation {
    type: 'replace-variables';
    /**
    * Variable prefix. Defaults to @@.
    */
    prefix?: string;
    /**
    * An object which keys are variable names and values are variable content.
    */
    variables: Record<string, string | number | ((content: string) => string | number)>;
}
interface UpdateContentOperation {
    type: 'update-content';
    /**
     * Callback that takes the file content and must return the updated content.
     */
    update: (content: string) => string;
}
interface EditJsonOperation {
    type: 'edit-json';
    /**
     * Merges the given JSON object.
     */
    merge?: JsonObject;
    /**
     * Replaces the given JSON object.
     * A helper is given to omit keys from the given JSON object.
     */
    replace?: (current: any, omit: (object: any, ...keys: string[]) => any) => JsonObject;
    /**
     * Deletes the properties at the given paths. Paths may have dots.
     */
    delete?: string | string[];
}
type EditFileOperation = (AddLineAtIndexOperation | AddLineAtOperation | AddLineWithMatchOperation | RemoveLineOperation | ReplaceVariablesOperation | UpdateContentOperation | EditJsonOperation) & {
    /**
     * Whether to skip that operation.
     */
    skipIf?: (content: string, targetFile: string) => Promisable<Boolean>;
};
interface EditFilesOptions {
    /**
    * The files to edit. Can use a double-star glob.
    */
    files: string | string[];
    /**
    * List of operations to perform on the given file.
    */
    operations: EditFileOperation | EditFileOperation[];
}

/**
 * Deletes the given paths from the target directory.
 */
declare const deletePaths: (options: DeletePathsOptions & Pick<ActionContext<any>, "title">) => Promise<void>;
interface DeletePathsOptions {
    paths: string | string[];
}

interface GroupOptions {
    /**
     * The callback that will execute actions.
     */
    handler: () => Promise<void>;
}
/**
 * Runs actions in a group.
 */
declare const group: (options: GroupOptions & Pick<ActionContext<any>, "title">) => Promise<void>;

/**
 * Asks for information.
 */
declare const prompt: (options: (PromptOptions & Pick<ActionContext<any>, "title">) | (SelectPromptOptions & Pick<ActionContext<any>, "title">)) => Promise<void>;
interface PromptAction {
    presetContext: PresetContext;
    actionContext: ActionContext;
    options: PromptOptions;
}
interface SelectPromptAction extends PromptAction {
    options: SelectPromptOptions;
}
interface PromptOptions {
    /**
     * The name of the prompt.
     */
    name: string;
    /**
     * The text to prompt.
     */
    text: string;
    /**
     * A default answer if none is returned.
     */
    default?: string;
}
type PromptChoice = {
    title: string;
    value?: string;
} | string;
interface SelectPromptOptions {
    /**
     * The name of the prompt.
     */
    name: string;
    /**
     * The text to prompt.
     */
    text: string;
    /**
     * Initial choice.
     */
    initial?: number;
    /**
     * List of possible choices.
     */
    choices: PromptChoice[];
}

/**
 * Renames the given folders or files from the target directory.
 */
declare const renamePaths: (options: RenamePathsOptions & Pick<ActionContext<any>, "title">) => Promise<void>;
interface ParsedPath {
    /**
     * The file or directory name (including the file extension).
     */
    name: string;
    /**
     * The file or directory name (without the file extension).
     */
    base: string;
    /**
     * If a file, the file extension.
     */
    ext?: string;
}
interface RenamePathsOptions {
    /**
     * The files or folders to rename. Can use a double-star glob.
     */
    paths: string | string[];
    /**
     * Transformer can be a `string` or `function()`, which returns the filename.
     */
    transformer: string | ((parameters: ParsedPath) => string);
}

/**
  * Creates the context for the given preset.
    * @internal
  */
declare function createPresetContext(preset: Preset, applyOptions: ApplyOptions, localPreset: LocalPreset): Promise<PresetContext>;
/**
 * Adds an action to the context.
 * @internal
 */
declare function createActionContext<Options extends Object, ResolvedOptions extends ActionOptions<Options>>(presetContext: PresetContext, name: string, options: ResolvedOptions, groupAction?: ActionContext): ActionContext<ResolvedOptions>;
/**
 * Gets the context for the current preset.
 * @internal
 */
declare function getCurrentPresetContext(): PresetContext | undefined;
/**
 * Marks the context as finished.
 */
declare function finishPresetContext(context: PresetContext, status: Status, error?: PresetError): void;
/**
 * Mark action as finished.
 * @internal
 */
declare function finishActionContext(action: LastArrayElement<PresetContext['actions']>, status: Status, error?: PresetError): void;
/**
  * Removes the current context from the context stacks.
  * @internal
  */
declare function popCurrentContext(): void;

export { type Action, type ActionContext, type ActionHandler, type ActionHandlerParameters, type ActionOptions, type ActionResult, type ApplyNestedPresetOptions, type ApplyOptions, type Code, type DefinePresetOptions, type DeletePathsOptions, type EditFileOperation, type EditFilesOptions, type ExecuteCommandOptions, type ExtractTemplatesOptions, type GroupOptions, type InstallPackagesOptions, type LocalDirectoryPreset, type LocalFilePreset, type LocalPreset, type NodePackageManager, type PostInstall, type Preset, type PresetConfiguration, type PresetContext, PresetError, type PresetFlags, type PresetHandler, type PresetResult, type PromptAction, type PromptChoice, type PromptInput, type PromptOptions, type PromptResponse, type PromptSelect, type RenamePathsOptions, type RepositoryPreset, type ResolvedPreset, type SelectPromptAction, type SelectPromptOptions, type Status, applyNestedPreset, applyPreset, cloneRepository, createActionContext, createPresetContext, defineAction, definePreset, deletePaths, editFiles, emitter, executeCommand, extractTemplates, finishActionContext, finishPresetContext, getCurrentPresetContext, group, importPresetFile, installPackages, parseResolvable, popCurrentContext, prompt, renamePaths, resolveAlias, resolveConfiguredAlias, resolveGitHubRepository, resolveLocalDirectory, resolveLocalFile, resolveNamespacedAlias, resolvePreset, resolvePresetFile };
