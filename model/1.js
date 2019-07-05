module.exports = (sequelize, Sequelize) => {
	const login = sequelize.define('Employee', {
	  firstName: {
		  type: Sequelize.STRING
	  },
	  lastName: {
		  type: Sequelize.STRING
	  },
	  password: {
		  type: Sequelize.STRING
	  },
	  alamat: {
		  type: Sequelize.STRING
      },
      posisi: {
        type: Sequelize.STRING
      },
      imgEmployee: {
        type: Sequelize.STRING
    }
	});
	
	return login;
}