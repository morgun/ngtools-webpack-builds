/// <reference types="node" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Path, virtualFs } from '@angular-devkit/core';
import { Stats } from 'fs';
import * as ts from 'typescript';
import { WebpackResourceLoader } from './resource_loader';
export interface OnErrorFn {
    (message: string): void;
}
export declare class WebpackCompilerHost implements ts.CompilerHost {
    private _options;
    private _syncHost;
    private _memoryHost;
    private _changedFiles;
    private _basePath;
    private _resourceLoader?;
    private _sourceFileCache;
    constructor(_options: ts.CompilerOptions, basePath: string, host: virtualFs.Host);
    private readonly virtualFiles;
    denormalizePath(path: string): string;
    resolve(path: string): Path;
    resetChangedFileTracker(): void;
    getChangedFilePaths(): string[];
    getNgFactoryPaths(): string[];
    invalidate(fileName: string): void;
    fileExists(fileName: string, delegate?: boolean): boolean;
    readFile(fileName: string): string | undefined;
    readFileBuffer(fileName: string): Buffer;
    private _makeStats;
    stat(path: string): Stats | null;
    directoryExists(directoryName: string): boolean;
    getDirectories(path: string): string[];
    getSourceFile(fileName: string, languageVersion: ts.ScriptTarget, onError?: OnErrorFn): ts.SourceFile | undefined;
    getDefaultLibFileName(options: ts.CompilerOptions): string;
    readonly writeFile: (fileName: string, data: string, _writeByteOrderMark: boolean, onError?: ((message: string) => void) | undefined, _sourceFiles?: ReadonlyArray<ts.SourceFile> | undefined) => void;
    getCurrentDirectory(): string;
    getCanonicalFileName(fileName: string): string;
    useCaseSensitiveFileNames(): boolean;
    getNewLine(): string;
    setResourceLoader(resourceLoader: WebpackResourceLoader): void;
    readResource(fileName: string): string | Promise<string> | undefined;
    trace(message: string): void;
}
export declare function workaroundResolve(path: Path | string): string;
