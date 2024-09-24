declare global {
		const definePreset: typeof import('@preset/core')['definePreset']
		const defineAction: typeof import('@preset/core')['defineAction']
		const extractTemplates: typeof import('@preset/core')['extractTemplates']
	const applyNestedPreset: typeof import('@preset/core')['applyNestedPreset']
	const installPackages: typeof import('@preset/core')['installPackages']
	const executeCommand: typeof import('@preset/core')['executeCommand']
	const editFiles: typeof import('@preset/core')['editFiles']
	const deletePaths: typeof import('@preset/core')['deletePaths']
	const group: typeof import('@preset/core')['group']
	const prompt: typeof import('@preset/core')['prompt']
	const renamePaths: typeof import('@preset/core')['renamePaths']
	}
	export {}
