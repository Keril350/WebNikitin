class ProdModifier {

    async modify(products, Mark) {

        for (let prod of products) {

            prod.dataValues["Amount of marks"] = await Mark.countMarks(prod.id);

            let tags = await prod.getTags();

            prod.dataValues.tags = [];

            for (let tag of tags) {

                prod.dataValues.tags.push(tag.name);

            }

        }
    }

}

module.exports = new ProdModifier();