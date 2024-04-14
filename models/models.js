const sequelize = require("../db");
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
});

const Todo = sequelize.define('todo', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    text: { type: DataTypes.STRING },
    isChecked: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
});

const TodoLayout = sequelize.define('todo-layout', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
});

const Cover = sequelize.define('cover', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    color: { type: DataTypes.STRING, unique: true },
    name: { type: DataTypes.STRING, unique: true },
});

const TodoCategory = sequelize.define('todo_category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true },
    isChosen: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
});

User.hasMany(TodoCategory);
TodoCategory.belongsTo(User);

User.hasMany(TodoLayout);
TodoLayout.belongsTo(User);

Cover.hasMany(TodoLayout);
TodoLayout.belongsTo(Cover);

TodoLayout.hasMany(Todo);
Todo.belongsTo(TodoLayout);

TodoCategory.hasMany(TodoLayout);
TodoLayout.belongsTo(TodoCategory);

module.exports = {
    User,
    Cover,
    TodoCategory,
    TodoLayout,
    Todo,
}
