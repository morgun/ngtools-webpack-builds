import * as ts from 'typescript';
import { Compiler, compilation } from 'webpack';
import { AngularCompilerPluginOptions } from './interfaces';
export declare class AngularCompilerPlugin {
    private _options;
    private _compilerOptions;
    private _rootNames;
    private _program;
    private _compilerHost;
    private _moduleResolutionCache;
    private _resourceLoader?;
    private _discoverLazyRoutes;
    private _useFactories;
    private _lazyRoutes;
    private _tsConfigPath;
    private _entryModule;
    private _mainPath;
    private _basePath;
    private _transformers;
    private _platformTransformers;
    private _platform;
    private _JitMode;
    private _emitSkipped;
    private _changedFileExtensions;
    private _firstRun;
    private _donePromise;
    private _normalizedLocale;
    private _warnings;
    private _errors;
    private _contextElementDependencyConstructor;
    private _forkTypeChecker;
    private _typeCheckerProcess;
    private _forkedTypeCheckerInitialized;
    private _logger;
    private _mainFields;
    constructor(options: AngularCompilerPluginOptions);
    readonly options: AngularCompilerPluginOptions;
    readonly done: Promise<void> | null;
    readonly entryModule: {
        path: string;
        className: string;
    } | null;
    readonly typeChecker: ts.TypeChecker | null;
    /** @deprecated  From 8.0.2 */
    static isSupported(): boolean;
    private _setupOptions;
    private _getTsProgram;
    updateChangedFileExtensions(extension: string): void;
    private _getChangedCompilationFiles;
    private _createOrUpdateProgram;
    private _findLazyRoutesInAst;
    private _listLazyRoutesFromProgram;
    private _processLazyRoutes;
    private _createForkedTypeChecker;
    private _killForkedTypeChecker;
    private _updateForkedTypeChecker;
    apply(compiler: Compiler & {
        watchMode?: boolean;
        parentCompilation?: compilation.Compilation;
    }): void;
    private _make;
    private pushCompilationErrors;
    private _makeTransformers;
    private _getChangedTsFiles;
    private _update;
    writeI18nOutFile(): void;
    getCompiledFile(fileName: string): {
        outputText: string;
        sourceMap: string | undefined;
        errorDependencies: string[];
    };
    getDependencies(fileName: string): string[];
    getResourceDependencies(fileName: string): string[];
    private _emit;
    private _validateLocale;
}
