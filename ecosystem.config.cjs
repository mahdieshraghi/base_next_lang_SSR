module.exports = {
  apps: [
    {
      name: "multilingual-ssr",
      script: "npm",
      args: "start",
      cwd: "./",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3009,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3009,
      },
      error_file: "./logs/pm2-error.log",
      out_file: "./logs/pm2-out.log",
      log_file: "./logs/pm2-combined.log",
      time: true,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      merge_logs: true,
    },
  ],
};

