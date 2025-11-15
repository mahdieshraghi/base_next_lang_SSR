# راهنمای استفاده از PM2

PM2 یک Process Manager برای Node.js است که به شما امکان اجرای دائمی و مدیریت برنامه را می‌دهد.

## نصب PM2

```bash
npm install -g pm2
```

## Build کردن پروژه

قبل از اجرا با PM2، باید پروژه را build کنید:

```bash
npm run build
```

## دستورات PM2

### شروع اجرا

```bash
npm run pm2:start
# یا
pm2 start ecosystem.config.cjs
```

### توقف

```bash
npm run pm2:stop
# یا
pm2 stop multilingual-ssr
```

### Restart

```bash
npm run pm2:restart
# یا
pm2 restart multilingual-ssr
```

### حذف از PM2

```bash
npm run pm2:delete
# یا
pm2 delete multilingual-ssr
```

### مشاهده لاگ‌ها

```bash
npm run pm2:logs
# یا
pm2 logs multilingual-ssr
```

### مشاهده وضعیت

```bash
npm run pm2:status
# یا
pm2 status
```

## تغییر پورت

برای تغییر پورت، فایل `ecosystem.config.cjs` را ویرایش کنید:

```javascript
env: {
  NODE_ENV: "production",
  PORT: 3001, // پورت دلخواه
},
```

سپس restart کنید:

```bash
pm2 restart multilingual-ssr
```

## اجرا روی همه Interface ها (برای سرور)

برای دسترسی از خارج، فایل `ecosystem.config.cjs` را ویرایش کنید:

```javascript
args: "start -- -H 0.0.0.0",
```

یا environment variable اضافه کنید:

```javascript
env: {
  NODE_ENV: "production",
  PORT: 3000,
  HOSTNAME: "0.0.0.0",
},
```

## Auto Restart بعد از Reboot

برای اینکه PM2 بعد از restart سرور هم اجرا شود:

```bash
pm2 startup
pm2 save
```

## دستورات مفید دیگر

```bash
# مشاهده اطلاعات جزئی
pm2 show multilingual-ssr

# مشاهده استفاده از CPU و Memory
pm2 monit

# مشاهده لاگ‌های real-time
pm2 logs multilingual-ssr --lines 100

# مشاهده لاگ‌های error
pm2 logs multilingual-ssr --err

# مشاهده لاگ‌های output
pm2 logs multilingual-ssr --out

# Flush کردن لاگ‌ها
pm2 flush

# مشاهده همه processes
pm2 list

# Stop همه processes
pm2 stop all

# Restart همه processes
pm2 restart all
```

## فایل‌های لاگ

لاگ‌ها در پوشه `logs/` ذخیره می‌شوند:
- `pm2-error.log` - خطاها
- `pm2-out.log` - خروجی
- `pm2-combined.log` - همه لاگ‌ها

## مثال کامل

```bash
# 1. Build پروژه
npm run build

# 2. شروع با PM2
npm run pm2:start

# 3. بررسی وضعیت
npm run pm2:status

# 4. مشاهده لاگ‌ها
npm run pm2:logs

# 5. Restart در صورت نیاز
npm run pm2:restart
```

## نکات مهم

1. **Build اول**: همیشه قبل از `pm2:start` باید `npm run build` را اجرا کنید
2. **پورت**: پورت پیش‌فرض 3000 است، می‌توانید در `ecosystem.config.cjs` تغییر دهید
3. **Auto Restart**: PM2 به صورت خودکار برنامه را restart می‌کند در صورت crash
4. **Memory Limit**: اگر memory بیش از 1GB شود، برنامه restart می‌شود
5. **Logs**: لاگ‌ها در پوشه `logs/` ذخیره می‌شوند


