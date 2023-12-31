"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
    index(ctx) {
        ctx.body = strapi
            .plugin('strapi-plugin-media-api')
            .service('myService')
            .getWelcomeMessage();
    },
    async getOne(ctx) {
        try {
            const { folderName } = ctx.params;
            const folder = await strapi.query("plugin::upload.folder").findOne({
                where: {
                    name: {
                        $eqi: folderName,
                    },
                },
                populate: {
                    files: {
                        sort: {
                            name: 'ASC'
                        },
                    }
                },
            });
            if (folder) {
                ctx.body = folder;
            }
            else {
                ctx.assert({}, 404);
            }
        }
        catch (err) {
            console.log(err);
        }
    },
    async getBaseFiles(ctx) {
        try {
            const files = await strapi.query('plugin::upload.file').findMany({
                where: {
                    folderPath: {
                        $eqi: '/'
                    }
                },
                populate: {
                    files: {
                        orderBy: {
                            name: 'asc'
                        }
                    }
                }
            });
            ctx.body = files;
        }
        catch (err) {
            ctx.body = err;
        }
    },
    async getAllFolders(ctx) {
        try {
            const folders = await strapi.query('plugin::upload.folder').findMany();
            ctx.body = folders;
        }
        catch (err) {
            ctx.body = err;
        }
    }
});
