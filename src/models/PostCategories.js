module.exports = (sequelize, _DataTypes) => {
    const PostsCategories = sequelize.define('PostsCategories',
      {},
      { timestamps: false, tableName: 'PostsCategories' });
  
    PostsCategories.associate = (models) => {
      models.BlogPosts.belongsToMany(models.Category, {
        as: 'categories',
        through: PostsCategories,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });
  
      models.Category.belongsToMany(models.BlogPosts, {
        as: 'posts',
        through: PostsCategories,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      });
    };
  
    return PostsCategories;
  }; 