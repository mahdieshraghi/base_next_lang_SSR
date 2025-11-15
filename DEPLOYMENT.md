# راهنمای Deploy و اجرای Production Build

## Build کردن پروژه

```bash
npm run build
```

این دستور پروژه را build می‌کند و فایل‌های production-ready را در پوشه `.next` ایجاد می‌کند.

## اجرای Production Build

### روش 1: پورت پیش‌فرض (3000)

```bash
npm start
```

پروژه روی `http://localhost:3000` اجرا می‌شود.

### روش 2: پورت دلخواه

```bash
npm start -- -p 3001
# یا
PORT=3001 npm start
```

پروژه روی پورت مشخص شده اجرا می‌شود (مثلاً `http://localhost:3001`).

### روش 3: با environment variable

```bash
PORT=8080 npm start
```

## مثال‌های مختلف

```bash
# پورت 3000 (پیش‌فرض)
npm start

# پورت 3001
npm start -- -p 3001

# پورت 8080
PORT=8080 npm start

# پورت 5000
npm start -- -p 5000
```

## دسترسی از خارج (Server)

اگر روی سرور اجرا می‌کنید:

```bash
# اجرا روی همه interface ها (0.0.0.0)
npm start -- -H 0.0.0.0 -p 3000

# یا با environment variable
HOSTNAME=0.0.0.0 PORT=3000 npm start
```

سپس می‌توانید از `http://YOUR_SERVER_IP:3000` دسترسی داشته باشید.

## نکات مهم

1. **Build اول**: قبل از `npm start` حتماً `npm run build` را اجرا کنید
2. **Environment Variables**: اگر از environment variables استفاده می‌کنید، مطمئن شوید که تنظیم شده‌اند
3. **Firewall**: اگر روی سرور اجرا می‌کنید، پورت را در firewall باز کنید
4. **NODE_ENV**: در production به صورت خودکار `NODE_ENV=production` تنظیم می‌شود

## استفاده با PM2 (Production)

برای اجرای دائمی در production:

```bash
# نصب PM2
npm install -g pm2

# اجرا با PM2
pm2 start npm --name "multilingual-ssr" -- start

# اجرا با پورت خاص
pm2 start npm --name "multilingual-ssr" -- start -- -p 3000

# مشاهده وضعیت
pm2 status

# مشاهده لاگ‌ها
pm2 logs multilingual-ssr
```

## استفاده با Docker

اگر از Docker استفاده می‌کنید:

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

سپس:

```bash
docker build -t multilingual-ssr .
docker run -p 3000:3000 multilingual-ssr
```


