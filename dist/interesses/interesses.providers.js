"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interessesProviders = void 0;
const interesses_entity_1 = require("./interesses.entity");
exports.interessesProviders = [
    {
        provide: 'INTERESSES_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(interesses_entity_1.INTERESSES),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=interesses.providers.js.map