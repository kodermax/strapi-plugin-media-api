"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        method: 'GET',
        path: '/docs/:folderName',
        handler: 'fs.getOne',
        config: {
            policies: [],
            auth: false,
        },
    },
    {
        method: 'GET',
        path: '/folders',
        handler: 'fs.getAllFolders',
        config: {
            policies: [],
            auth: false,
        },
    },
    {
        method: 'GET',
        path: '/root-files',
        handler: 'fs.getBaseFiles',
        config: {
            policies: [],
            auth: false,
        },
    },
];
