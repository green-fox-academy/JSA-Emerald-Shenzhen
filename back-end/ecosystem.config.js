module.exports = {
  apps : [{
    name: 'back-end',
    script: 'index.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : '52.194.188.75',
      key  : 'ec2.pem',
      ref  : 'origin/master',
      repo : 'git@github.com:green-fox-academy/JSA-Emerald-Shenzhen.git',
      path : '/home/ubuntu/emerald/',
      'post-deploy' : 'cd back-end && npm install && pm2 startOrRestart ecosystem.config.js --env production'
    }
  }
};
