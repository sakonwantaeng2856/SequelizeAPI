module.exports = (sequelize, DataTypes) => {
  let player = sequelize.define("player", {
    name: {
      type: DataTypes.STRING(100),
    },
    position: {
      type: DataTypes.STRING(100),
    },
    year: {
      type: DataTypes.INTEGER,
    },
  });
  return player;
};
