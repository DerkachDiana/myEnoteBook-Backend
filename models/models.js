const sequelize = require("../db");
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nickname: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
},
{
    timestamps: false,
});

const Token = sequelize.define('token', {
    refreshToken: { type: DataTypes.STRING, required: true, }
},
{
    timestamps: false,
})

const Todo = sequelize.define('todo', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    text: { type: DataTypes.STRING },
    isChecked: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
},
{
    timestamps: false,
});

const TodoLayout = sequelize.define('todo-layout', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
},
{
    timestamps: false,
});

const Cover = sequelize.define('cover', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    color: { type: DataTypes.STRING, unique: true },
    name: { type: DataTypes.STRING, unique: true },
},
{
    timestamps: false,
});

const TodoCategory = sequelize.define('todo_category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true },
},
{
    timestamps: false,
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

User.hasOne(Token);

module.exports = {
    User,
    Cover,
    TodoCategory,
    TodoLayout,
    Todo,
    Token,
}
