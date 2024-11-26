const User = require("./user");
const Product = require("./product");
const Role = require("./role");
const UserRole = require("./userRole");
const DeleteRequest = require("./deleteRequest");
const Mark = require("./mark");
const Tag = require("./tag")
const productTag = require("./productTag");

Role.belongsToMany(User, { through: UserRole, foreignKey: "role_id" });
User.belongsToMany(Role, { through: UserRole, foreignKey: "user_id" });

User.hasMany(Mark, { foreignKey: "user_id" });
Product.hasMany(Mark, { foreignKey: "product_id" });

Product.belongsToMany(Tag, {through: productTag, foreignKey: "product_id"});
Tag.belongsToMany(Product, {through: productTag, foreignKey: "tag_id"});

DeleteRequest.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });
