import { createRequire } from 'node:module';
export const getInstalledStatus = (pkg, currentUrl) => {
    try {
        if (pkg)
            createRequire(currentUrl).resolve(pkg);
        return true;
    }
    catch {
        return false;
    }
};
