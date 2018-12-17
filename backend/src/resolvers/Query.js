const { forwardTo } = require('prisma-binding');
const Query = {
    async items(parent, args, ctx, info) {
        items = forwardTo(db)

    }
};

module.exports = Query;
