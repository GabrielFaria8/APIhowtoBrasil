"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filesProviders = void 0;
const files_entity_1 = require("./files.entity");
exports.filesProviders = [
    {
        provide: 'FILES_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(files_entity_1.Files),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=files.providers.js.map