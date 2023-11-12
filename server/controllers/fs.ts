import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
    index(ctx) {
        ctx.body = strapi
            .plugin('strapi-plugin-file-system')
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
                populate: [{
                    files: {
                        sort: ['name:asc'],
                    }
                }, "children"],
            });
            if (folder) {
                ctx.body = folder;
            } else {
                ctx.assert({}, 404);
            }
        } catch (err) {
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
            });
            ctx.body = files;
        } catch (err) {
            ctx.body = err;
        }
    },
    async getAllFolders(ctx) {
        try {
            const folders = await strapi.query('plugin::upload.folder').findMany()
            ctx.body = folders;
        } catch (err) {
            ctx.body = err;
        }
    }
});
