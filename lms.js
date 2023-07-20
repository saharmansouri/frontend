/*
 Navicat Premium Data Transfer

 Source Server         : sabzlearn
 Source Server Type    : MongoDB
 Source Server Version : 60007 (6.0.7)
 Source Host           : localhost:27017
 Source Schema         : lms

 Target Server Type    : MongoDB
 Target Server Version : 60007 (6.0.7)
 File Encoding         : 65001

 Date: 20/07/2023 15:55:08
*/


// ----------------------------
// Collection structure for articles
// ----------------------------
db.getCollection("articles").drop();
db.createCollection("articles");
db.getCollection("articles").createIndex({
    shortName: NumberInt("1")
}, {
    name: "shortName_1",
    background: true,
    unique: true
});

// ----------------------------
// Documents of articles
// ----------------------------
db.getCollection("articles").insert([ {
    _id: ObjectId("63531ca63ebf20c2bb34b15c"),
    title: "مقایسه ویو و ری اکت",
    description: "توضیحات تستی برای مقاله مقایسه ویو و ری اکت",
    body: "بادی تستی برای مقاله مقایسه ویو و ری اکت",
    cover: "3.jpg",
    shortName: "vue-or-react",
    categoryID: ObjectId("6345cbd132c10de974957632"),
    creator: ObjectId("634e6b0e1d5142b91afa9bb3"),
    createdAt: ISODate("2022-10-21T22:26:46.878Z"),
    updatedAt: ISODate("2022-10-21T22:26:46.878Z"),
    __v: NumberInt("0"),
    publish: 1
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("63531f323ebf20c2bb34b16b"),
    title: "چرا انگیولار محبوب نشد؟",
    description: "توضیحات تستی برای مقاله چرا انگیولار محبوب نشد؟",
    body: "بادی تستی برای مقاله چرا انگیولار محبوب نشد؟",
    cover: "4.png",
    shortName: "why-angular-in-not-popular",
    categoryID: ObjectId("6345cbd132c10de974957632"),
    creator: ObjectId("634e6b0e1d5142b91afa9bb3"),
    createdAt: ISODate("2022-10-21T22:37:38.367Z"),
    updatedAt: ISODate("2022-10-21T22:37:38.367Z"),
    __v: NumberInt("0"),
    publish: 1
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("635320d83ebf20c2bb34b170"),
    title: "ترفند های تاریخ و زمان در جاوا اسکریپت",
    description: "توضیحات تستی برای مقاله ترفند های تاریخ و زمان در جاوا اسکریپت",
    body: "بادی تستی برای مقاله ترفند های تاریخ و زمان در جاوا اسکریپت",
    cover: "3.jpg",
    shortName: "date-in-js",
    categoryID: ObjectId("6345cbd132c10de974957632"),
    creator: ObjectId("634e6b0e1d5142b91afa9bb3"),
    createdAt: ISODate("2022-10-21T22:44:40.046Z"),
    updatedAt: ISODate("2022-10-21T22:44:40.046Z"),
    __v: NumberInt("0"),
    publish: 1
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("63611c981f40070ba1cb22c8"),
    title: "برای یادگیری ری‌اکت چقدر باید جاوا اسکریپت بلد باشیم؟",
    description: "تو این مقاله راجع به فلان فلانم فلان بسزنرحیبسزژ ریبسکنتلزردیسبر",
    body: "<h2><strong>معرفی بهترین سایت ‌های آموزش جاوا اسکریپت:</strong></h2><p>&nbsp;</p><p><strong>توجه داشته باشید که تمام وب سایت‌هایی که به عنوان بهترین سایت آموزش جاوا اسکریپت در ادامه معرفی می‌کنیم، بین‌المللی هستند و منابع موجود در آن‌ها به زبان انگلیسی است. در نتیجه شما باید یا تسلط متوسط و حداقلی به زبان انگلیسی داشته باشید و یا اینکه با استفاده از گوگل ترنسلیت منابع موجود را ترجمه کرده و از آن‌ها استفاده کنید. به همین دلیل در انتهای محتوا به شما خواهیم گفت که راه آسان دیگری برای یادگیری زبان جاوا اسکریپت وجود دارد که شما بتوانید به واسطه آن به صورت رایگان و به زبان فارسی این زبان را یاد بگیرید.</strong></p>",
    cover: "56108e0f5399b79e348989b1c04f7c2ce3ad429546ed59d1d7420898ca5591c4.png",
    shortName: "how-much-js-to-start-react",
    categoryID: ObjectId("6345cbd132c10de974957632"),
    creator: ObjectId("634e6b0e1d5142b91afa9bb3"),
    createdAt: ISODate("2022-11-01T13:18:16.454Z"),
    updatedAt: ISODate("2022-11-01T13:18:16.454Z"),
    __v: NumberInt("0"),
    publish: 1
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("63619e3b1ad3491377fa251f"),
    title: "ساخت صفحات 404 جذاب با Css و JS",
    description: "ما تو این مقاله یاد میگیریم که چطوری ، ... الی آخر",
    body: "<h2>ساخت صفحه 404 مدل فلان</h2><p>ری اکت گل سرسبد فرانت اند محسوب میشود،اگر دوره react را ببینید، بازار کار فرانت اند پیشنهادهای بسیار شگفت انگیزی برای شما خواهد داشت! در این دوره شما آموزش ری اکت رابر اساس تجربیات مدرس در دنیای واقعی و کار با شرکت های مختلف ایرانی یاد می گیرید و در دوره اموزش ری اکت مدرس دوره از نقطه صفر تا رسیدن شما به مرحله پیاده سازی نمونه کار، طراحی رزومه و … استخدام همراه شما خواهد بود. (به این معنی که تا پس از این دوره استخدام نشوید، ما شما را رها نمیکنیم!)</p>",
    cover: "a6ffb1ed11bae54f6ef12e55cfa0cc2dfcf640df25b25f70dfa61cbc5703d12f.png",
    shortName: "make-creative404-page-with-css-and-js",
    categoryID: ObjectId("6345cbd132c10de974957632"),
    creator: ObjectId("634e6b0e1d5142b91afa9bb3"),
    createdAt: ISODate("2022-11-01T22:31:23.886Z"),
    updatedAt: ISODate("2022-11-01T22:31:23.886Z"),
    __v: NumberInt("0"),
    publish: 1
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("636a19a9882118547d70c55f"),
    title: "مقاله فیک برای تست پیش نویس",
    description: "این توضیحات تستی برای پیش نویس مقاله هست",
    body: "<p>این یه بادی تستیه</p>",
    cover: "da877ea96a7e8f7c9bced14ac791f424af4b0b4eab101ef636545c20e9eed116.jpg",
    shortName: "test-link",
    categoryID: ObjectId("635ef447f058a6af04d00510"),
    creator: ObjectId("634e6bea1d5142b91afa9bb7"),
    publish: NumberInt("0"),
    createdAt: ISODate("2022-11-08T08:56:09.154Z"),
    updatedAt: ISODate("2022-11-08T08:56:09.154Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("63b154a69dbc7f3ad2843767"),
    title: "تفاوت urlSearchParam و QueryString",
    description: "این یک چکیده تستی برای QueryString-vs-urlSearchParam مقاله هست.",
    body: "<p>این توضیحات یسری توضیحات تستی برای QueryString-vs-urlSearchParam مقاله هست.</p><p>ما تو این مقاله میخوام راجع به فلان مقدار باهمدیگه صحبت بکنیم ….</p>",
    cover: "797e8c56741ef9569f4c060213ba917340419dded819c6014ae60bcdb967a9c0.png",
    shortName: "QueryString-vs-urlSearchParam",
    categoryID: ObjectId("6345cbd132c10de974957632"),
    creator: ObjectId("634e6b0e1d5142b91afa9bb3"),
    publish: NumberInt("1"),
    createdAt: ISODate("2023-01-01T09:38:46.059Z"),
    updatedAt: ISODate("2023-01-01T09:38:46.059Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for banusers
// ----------------------------
db.getCollection("banusers").drop();
db.createCollection("banusers");

// ----------------------------
// Documents of banusers
// ----------------------------
db.getCollection("banusers").insert([ {
    _id: ObjectId("635bb868788f768b97a6a951"),
    phone: "09121234567",
    createdAt: ISODate("2022-10-28T11:09:28.926Z"),
    updatedAt: ISODate("2022-10-28T11:09:28.926Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("banusers").insert([ {
    _id: ObjectId("63671ba9188a82dd31c925a2"),
    phone: "09156781234",
    createdAt: ISODate("2022-11-06T02:27:53.5Z"),
    updatedAt: ISODate("2022-11-06T02:27:53.5Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("banusers").insert([ {
    _id: ObjectId("63671bc1188a82dd31c96154"),
    phone: "09156781234",
    createdAt: ISODate("2022-11-06T02:28:17.361Z"),
    updatedAt: ISODate("2022-11-06T02:28:17.361Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("banusers").insert([ {
    _id: ObjectId("63671c41188a82dd31caf677"),
    phone: "09156781234",
    createdAt: ISODate("2022-11-06T02:30:25.234Z"),
    updatedAt: ISODate("2022-11-06T02:30:25.234Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("banusers").insert([ {
    _id: ObjectId("63ad6f7a5866e538812f443c"),
    phone: "09121112234",
    createdAt: ISODate("2022-12-29T10:44:10.927Z"),
    updatedAt: ISODate("2022-12-29T10:44:10.927Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("banusers").insert([ {
    _id: ObjectId("63ad6fe45866e538812f4445"),
    phone: "09189872341",
    createdAt: ISODate("2022-12-29T10:45:56.378Z"),
    updatedAt: ISODate("2022-12-29T10:45:56.378Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("banusers").insert([ {
    _id: ObjectId("64b6471bb373d0e90f11ce66"),
    phone: "09192345123",
    createdAt: ISODate("2023-07-18T08:02:35.77Z"),
    updatedAt: ISODate("2023-07-18T08:02:35.77Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for categories
// ----------------------------
db.getCollection("categories").drop();
db.createCollection("categories");

// ----------------------------
// Documents of categories
// ----------------------------
db.getCollection("categories").insert([ {
    _id: ObjectId("6345cbd132c10de974957632"),
    title: "new Cat",
    createdAt: ISODate("2022-10-11T20:02:25.118Z"),
    updatedAt: ISODate("2023-07-19T13:01:54.518Z"),
    __v: NumberInt("0"),
    name: "cat test"
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("6345cc0a32c10de974957635"),
    title: "برنامه نویسی بک‌اند",
    createdAt: ISODate("2022-10-11T20:03:22.567Z"),
    updatedAt: ISODate("2022-10-11T20:03:22.567Z"),
    __v: NumberInt("0"),
    name: "backend"
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("635d0df056ccb11e448fe992"),
    title: "برنامه نویسی فلاتر",
    name: "flutter",
    createdAt: ISODate("2022-10-29T11:26:40.165Z"),
    updatedAt: ISODate("2022-10-29T13:46:00.099Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("635ef447f058a6af04d00510"),
    title: "پایتون",
    name: "py",
    createdAt: ISODate("2022-10-30T22:01:43.787Z"),
    updatedAt: ISODate("2022-10-30T22:01:43.787Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("63ae19ccb2f67a35191a3ea7"),
    title: "سی شارپ",
    name: "c-sharp",
    createdAt: ISODate("2022-12-29T22:50:52.842Z"),
    updatedAt: ISODate("2022-12-29T22:50:52.842Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("64b7c213c83a9c7dbe895342"),
    title: "defdfg",
    name: "shortname",
    createdAt: ISODate("2023-07-19T10:59:31.747Z"),
    updatedAt: ISODate("2023-07-19T10:59:31.747Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("64b7c296c83a9c7dbe895354"),
    title: "sahar",
    name: "zibaa",
    createdAt: ISODate("2023-07-19T11:01:42.095Z"),
    updatedAt: ISODate("2023-07-19T11:01:42.095Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("64b8ea3617f2b078046837b0"),
    title: "frontend",
    name: "frontend",
    createdAt: ISODate("2023-07-20T08:03:02.591Z"),
    updatedAt: ISODate("2023-07-20T08:03:02.591Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for comments
// ----------------------------
db.getCollection("comments").drop();
db.createCollection("comments");

// ----------------------------
// Documents of comments
// ----------------------------
db.getCollection("comments").insert([ {
    _id: ObjectId("635091df49de41347dfbae48"),
    body: "دوره خیلی مقید بود، ممنونم از زحماتتون",
    course: ObjectId("6345cfc7586b68648f7f2430"),
    creator: ObjectId("634e6b0e1d5142b91afa9bb3"),
    createdAt: ISODate("2022-10-20T00:10:07.985Z"),
    updatedAt: ISODate("2022-11-10T08:31:22.57Z"),
    __v: NumberInt("0"),
    answer: NumberInt("0"),
    isAnswer: 0,
    score: NumberInt("5")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("6350921b49de41347dfbae4c"),
    body: "از دوره راضی بودم",
    course: ObjectId("6345cfc7586b68648f7f2430"),
    creator: ObjectId("634e6b0e1d5142b91afa9bb3"),
    createdAt: ISODate("2022-10-20T00:11:07.408Z"),
    updatedAt: ISODate("2022-11-07T09:33:57.19Z"),
    __v: NumberInt("0"),
    answer: NumberInt("1"),
    isAnswer: 0,
    score: NumberInt("5")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("63519db02669401e16c96b12"),
    body: "سلام وقت بخیر\nدر صورت امکان لطفا پروژه ایکس رو هم به دوره اضافه کنید. باتشکر",
    course: ObjectId("6345cfc7586b68648f7f2430"),
    creator: ObjectId("634e6bea1d5142b91afa9bb7"),
    createdAt: ISODate("2022-10-20T19:12:48.208Z"),
    updatedAt: ISODate("2022-11-06T22:34:24.627Z"),
    __v: NumberInt("0"),
    answer: NumberInt("1"),
    isAnswer: 0,
    score: NumberInt("5")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("63683670212da4e3f93430e8"),
    body: "چشم. پروژه ایکس به دوره اضافه میشه در آینده",
    course: ObjectId("6345cfc7586b68648f7f2430"),
    creator: ObjectId("634e6b0e1d5142b91afa9bb3"),
    answer: NumberInt("1"),
    isAnswer: NumberInt("1"),
    mainCommendID: ObjectId("63519db02669401e16c96b12"),
    createdAt: ISODate("2022-11-06T22:34:24.644Z"),
    updatedAt: ISODate("2022-11-06T22:34:24.644Z"),
    __v: NumberInt("0"),
    score: NumberInt("5")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("6368ca352a837e800b568157"),
    body: "خیلی خوشحالم که دوره براتون مفید و لذت بخش بوده",
    course: ObjectId("6345cfc7586b68648f7f2430"),
    creator: ObjectId("634e6b0e1d5142b91afa9bb3"),
    answer: NumberInt("1"),
    isAnswer: NumberInt("1"),
    mainCommendID: ObjectId("6350921b49de41347dfbae4c"),
    createdAt: ISODate("2022-11-07T09:04:53.847Z"),
    updatedAt: ISODate("2022-11-07T09:04:53.847Z"),
    __v: NumberInt("0"),
    score: NumberInt("5")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("6368caf52a837e800b571b08"),
    body: "سلام استاد و وقتتون بخیر. لطفا پروژه سبزلرن رو سریع‌تر استارت بزنین.",
    course: ObjectId("635f05d6fd9e8fcba0d2c909"),
    creator: ObjectId("6368cace2a837e800b56d668"),
    answer: NumberInt("1"),
    isAnswer: NumberInt("0"),
    createdAt: ISODate("2022-11-07T09:08:05.281Z"),
    updatedAt: ISODate("2022-11-07T09:09:10.255Z"),
    __v: NumberInt("0"),
    score: NumberInt("5")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("6368cb362a837e800b57bfa9"),
    body: "سلام آقای اصغری عزیز. چشم. پروژه سبزلرن از بهمن ماه استارت میخوره",
    course: ObjectId("635f05d6fd9e8fcba0d2c909"),
    creator: ObjectId("634e6b0e1d5142b91afa9bb3"),
    answer: NumberInt("1"),
    isAnswer: NumberInt("1"),
    mainCommendID: ObjectId("6368caf52a837e800b571b08"),
    createdAt: ISODate("2022-11-07T09:09:10.262Z"),
    updatedAt: ISODate("2022-11-07T09:09:10.262Z"),
    __v: NumberInt("0"),
    score: NumberInt("5")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("6368d3f02b06ef378841d33c"),
    body: "کامنت فیک برای تست تایید کامنت‌ها :))",
    course: ObjectId("6345cfc7586b68648f7f2430"),
    creator: ObjectId("634e6b0e1d5142b91afa9bb3"),
    answer: NumberInt("0"),
    isAnswer: NumberInt("0"),
    createdAt: ISODate("2022-11-07T09:46:24.424Z"),
    updatedAt: ISODate("2022-11-10T08:31:25.551Z"),
    __v: NumberInt("0"),
    score: NumberInt("5")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("63a768584919f3817bb0a3fe"),
    body: "سلام وقت بخیر. این یک کامنت تست هست :))",
    course: ObjectId("6345cfc7586b68648f7f2430"),
    creator: ObjectId("6399948e0c0919c962751a12"),
    answer: NumberInt("1"),
    score: NumberInt("5"),
    isAnswer: NumberInt("0"),
    createdAt: ISODate("2022-12-24T21:00:08.675Z"),
    updatedAt: ISODate("2023-01-01T14:59:58.724Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("63b14f019dbc7f3ad284374e"),
    body: "دوره خوبی بود",
    course: ObjectId("635f05d6fd9e8fcba0d2c909"),
    creator: ObjectId("634e6b0e1d5142b91afa9bb3"),
    answer: NumberInt("0"),
    score: NumberInt("5"),
    isAnswer: NumberInt("0"),
    createdAt: ISODate("2023-01-01T09:14:41.045Z"),
    updatedAt: ISODate("2023-01-01T09:14:41.045Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("63b19631482fc840cc8980c4"),
    body: "دوره خیلی خوبی بووووود",
    course: ObjectId("6345cfc7586b68648f7f2430"),
    creator: ObjectId("634e6b0e1d5142b91afa9bb3"),
    answer: NumberInt("1"),
    score: NumberInt("5"),
    isAnswer: NumberInt("0"),
    createdAt: ISODate("2023-01-01T14:18:25.816Z"),
    updatedAt: ISODate("2023-01-01T14:58:23.528Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("63b19f8f16d4f075d7c41fb2"),
    body: "با سلام دوست عزیز. خیلی ممنونم از کامنت تستی شما :/",
    course: ObjectId("6345cfc7586b68648f7f2430"),
    creator: ObjectId("634e6b0e1d5142b91afa9bb3"),
    answer: NumberInt("1"),
    score: NumberInt("5"),
    isAnswer: NumberInt("1"),
    mainCommendID: ObjectId("63b19631482fc840cc8980c4"),
    createdAt: ISODate("2023-01-01T14:58:23.545Z"),
    updatedAt: ISODate("2023-01-01T14:58:23.545Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("63b19fee16d4f075d7c41fca"),
    body: "پاسخ تستی به خانوم فاطمه رحمانی",
    course: ObjectId("6345cfc7586b68648f7f2430"),
    creator: ObjectId("634e6b0e1d5142b91afa9bb3"),
    answer: NumberInt("1"),
    score: NumberInt("5"),
    isAnswer: NumberInt("1"),
    mainCommendID: ObjectId("63a768584919f3817bb0a3fe"),
    createdAt: ISODate("2023-01-01T14:59:58.738Z"),
    updatedAt: ISODate("2023-01-01T14:59:58.738Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for contacts
// ----------------------------
db.getCollection("contacts").drop();
db.createCollection("contacts");

// ----------------------------
// Documents of contacts
// ----------------------------
db.getCollection("contacts").insert([ {
    _id: ObjectId("635f469719e8c6bb96f8db41"),
    name: "امین سعیدی",
    email: "ce01010101it@gmail.com",
    phone: "09921558293",
    body: "لطفا شرایط همکاری را با بنده در میان بگذارید، با تشکر",
    createdAt: ISODate("2022-10-31T03:52:55.313Z"),
    updatedAt: ISODate("2022-12-31T08:30:11.782Z"),
    __v: NumberInt("0"),
    answer: NumberInt("1")
} ]);
db.getCollection("contacts").insert([ {
    _id: ObjectId("636596f50f2f0eff7fbad44a"),
    name: "علی اسدی",
    email: "asadi@gmail.com",
    phone: "09912349801",
    answer: NumberInt("1"),
    body: "سلام. لطفا با من تماس بگیرید",
    createdAt: ISODate("2022-11-04T22:49:25.145Z"),
    updatedAt: ISODate("2022-11-05T11:45:13.329Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contacts").insert([ {
    _id: ObjectId("63664deb2e5f32ca02affec3"),
    name: "محمد امیری",
    email: "amiri@gmail.com",
    phone: "09912345123",
    answer: NumberInt("1"),
    body: "لطفا دوره Pwa رو هم سریع‌تر شروع بکنید.",
    createdAt: ISODate("2022-11-05T11:50:03.347Z"),
    updatedAt: ISODate("2022-11-07T21:58:49.43Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contacts").insert([ {
    _id: ObjectId("63a4497f468fdd70c884818f"),
    name: "فاطمه رحمانی",
    email: "ftm_rahmani@gmail.com",
    phone: "09923162051",
    answer: NumberInt("1"),
    body: "سلام وقت بخیر. چطور میتونم در زمینه دوره های مربوط به فتوشاپ میتونم باهاتون همکاری داشته باشم؟ ممنونم از سایت خوبتون",
    createdAt: ISODate("2022-12-22T12:11:43.469Z"),
    updatedAt: ISODate("2022-12-31T08:50:27.163Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contacts").insert([ {
    _id: ObjectId("63a4510074b572928fedc3d5"),
    name: "علیرضا عبدی",
    email: "ali@gmail.com",
    phone: "09912348901",
    answer: NumberInt("1"),
    body: "سلام وقت بخیر. این یک پیغام تست است :))",
    createdAt: ISODate("2022-12-22T12:43:44.498Z"),
    updatedAt: ISODate("2022-12-26T08:24:28.76Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contacts").insert([ {
    _id: ObjectId("64aff5155b4f19a68c0970c0"),
    name: "ali",
    email: "ali@ali.com",
    phone: "09123456789",
    answer: NumberInt("0"),
    body: "سلام من علی هستم سلام من علی هستم سلام من علی هستم سلام من علی هستم ",
    createdAt: ISODate("2023-07-13T12:59:01.593Z"),
    updatedAt: ISODate("2023-07-13T12:59:01.593Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("contacts").insert([ {
    _id: ObjectId("64aff5435b4f19a68c09c3b5"),
    name: "ali",
    email: "ali@ali.com",
    phone: "09123456789",
    answer: NumberInt("0"),
    body: "سلام من علی هستم سلام من علی هستم سلام من علی هستم سلام من علی هستم ",
    createdAt: ISODate("2023-07-13T12:59:47.941Z"),
    updatedAt: ISODate("2023-07-13T12:59:47.941Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for courses
// ----------------------------
db.getCollection("courses").drop();
db.createCollection("courses");

// ----------------------------
// Documents of courses
// ----------------------------
db.getCollection("courses").insert([ {
    _id: ObjectId("6345cda6474f74e04218f6f7"),
    name: "دوره جامع Nodejs برای‌بازار کار",
    description: "توضیحات تستی برای دوره ری‌اکت سبزلرن",
    cover: "http://localhost:4000/courses/covers/4.png",
    shortName: "node-expert",
    categoryID: ObjectId("6345cc0a32c10de974957635"),
    creator: ObjectId("634e6bea1d5142b91afa9bb7"),
    createdAt: ISODate("2022-10-11T20:10:14.569Z"),
    updatedAt: ISODate("2023-01-03T09:00:50.434Z"),
    __v: NumberInt("0"),
    isComplete: 0,
    support: "گروه تلگرامی",
    price: 2900000,
    status: "start",
    discount: NumberInt("50")
} ]);
db.getCollection("courses").insert([ {
    _id: ObjectId("6345cfc7586b68648f7f2430"),
    name: "دوره NPM برای برنامه نویسان جاوا اسکریپت",
    description: "توضیحات تست برای دوره NPM سبزلرن",
    cover: "http://localhost:4000/courses/covers/youtuber.png",
    shortName: "npm",
    categoryID: ObjectId("6345cbd132c10de974957632"),
    creator: ObjectId("634e6bea1d5142b91afa9bb7"),
    createdAt: ISODate("2022-10-11T20:19:19.749Z"),
    updatedAt: ISODate("2023-01-03T09:00:50.434Z"),
    __v: NumberInt("0"),
    isComplete: 1,
    support: "گروه تلگرامی",
    price: 0,
    status: "start",
    discount: NumberInt("50")
} ]);
db.getCollection("courses").insert([ {
    _id: ObjectId("635305a1678235ce17e263cc"),
    name: "دوره آموزش Vuejs",
    description: "توضیحات تستی برای دوره  ویو جی اس",
    cover: "http://localhost:4000/courses/covers/python.png",
    support: "گروه تلگرامی",
    shortName: "vuejs",
    price: NumberInt("0"),
    isComplete: NumberInt("0"),
    categoryID: ObjectId("6345cbd132c10de974957632"),
    creator: ObjectId("634e6b0e1d5142b91afa9bb3"),
    createdAt: ISODate("2022-10-21T20:48:33.239Z"),
    updatedAt: ISODate("2023-01-03T09:00:50.434Z"),
    __v: NumberInt("0"),
    status: "start",
    discount: NumberInt("50")
} ]);
db.getCollection("courses").insert([ {
    _id: ObjectId("635d494ed4d9250c10a1dadc"),
    name: "دوره پروژه محور بوت استرپ",
    description: "توضیحات تستی برای دوره BootStrap",
    cover: "http://localhost:4000/courses/covers/bootstrap.png",
    support: "گروه تلگرامی",
    shortName: "bootstrap",
    price: NumberInt("0"),
    isComplete: NumberInt("0"),
    status: "start",
    categoryID: ObjectId("6345cbd132c10de974957632"),
    creator: ObjectId("634e6b0e1d5142b91afa9bb3"),
    createdAt: ISODate("2022-10-29T15:39:58.114Z"),
    updatedAt: ISODate("2023-01-03T09:00:50.434Z"),
    __v: NumberInt("0"),
    discount: NumberInt("50")
} ]);
db.getCollection("courses").insert([ {
    _id: ObjectId("635f05d6fd9e8fcba0d2c909"),
    name: "آموزش 20 کتابخانه جاوا اسکریپت",
    description: "توضیحات تستی برای دوره آموزش 20 کتابخانه جاوا اسکریپت",
    cover: "http://localhost:4000/courses/covers/js20.png",
    support: "گروه تلگرامی",
    shortName: "js-expert",
    price: NumberInt("300000"),
    isComplete: NumberInt("0"),
    status: "start",
    categoryID: ObjectId("64b8ea3617f2b078046837b0"),
    creator: ObjectId("634e6b0e1d5142b91afa9bb3"),
    createdAt: ISODate("2022-10-30T23:16:38.317Z"),
    updatedAt: ISODate("2023-01-03T09:00:50.434Z"),
    __v: NumberInt("0"),
    discount: NumberInt("50")
} ]);
db.getCollection("courses").insert([ {
    _id: ObjectId("63ac09b2eac86a8e8a018b89"),
    name: "دوره RegEx برای تمامی برنامه نویسان",
    description: "یادگیری رجکس برای تمام برنامه نویسان ضروری و واجب می‌باشد...",
    cover: "http://localhost:4000/courses/covers/RegEx.png",
    support: "پرسش و پاسخ سبزلرن",
    shortName: "regex-course",
    price: NumberInt("240000"),
    isComplete: NumberInt("0"),
    status: "start",
    discount: NumberInt("50"),
    categoryID: ObjectId("6345cbd132c10de974957632"),
    creator: ObjectId("634e6b0e1d5142b91afa9bb3"),
    createdAt: ISODate("2022-12-28T09:17:38.99Z"),
    updatedAt: ISODate("2023-01-03T09:00:50.434Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for courseusers
// ----------------------------
db.getCollection("courseusers").drop();
db.createCollection("courseusers");

// ----------------------------
// Documents of courseusers
// ----------------------------
db.getCollection("courseusers").insert([ {
    _id: ObjectId("636a66a23f5ce1a8cd340526"),
    course: ObjectId("635305a1678235ce17e263cc"),
    user: ObjectId("636a62204950b7db7101093c"),
    createdAt: ISODate("2022-11-08T14:24:34.091Z"),
    updatedAt: ISODate("2022-11-08T14:24:34.091Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("courseusers").insert([ {
    _id: ObjectId("636a66d33f5ce1a8cd3418fc"),
    course: ObjectId("635305a1678235ce17e263cc"),
    user: ObjectId("634e6bea1d5142b91afa9bb7"),
    createdAt: ISODate("2022-11-08T14:25:23.659Z"),
    updatedAt: ISODate("2022-11-08T14:25:23.659Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("courseusers").insert([ {
    _id: ObjectId("636ab6cb9fe9e84ec1d74c9d"),
    course: ObjectId("635d494ed4d9250c10a1dadc"),
    user: ObjectId("634e6bea1d5142b91afa9bb7"),
    createdAt: ISODate("2022-11-08T20:06:35.756Z"),
    updatedAt: ISODate("2022-11-08T20:06:35.756Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("courseusers").insert([ {
    _id: ObjectId("636ab89b9fe9e84ec1db7bd0"),
    course: ObjectId("6345cda6474f74e04218f6f7"),
    user: ObjectId("634e6bea1d5142b91afa9bb7"),
    createdAt: ISODate("2022-11-08T20:14:20.002Z"),
    updatedAt: ISODate("2022-11-08T20:14:20.002Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("courseusers").insert([ {
    _id: ObjectId("636ab8ce9fe9e84ec1dbe999"),
    course: ObjectId("6345cda6474f74e04218f6f7"),
    user: ObjectId("636a62204950b7db7101093c"),
    createdAt: ISODate("2022-11-08T20:15:10.479Z"),
    updatedAt: ISODate("2022-11-08T20:15:10.479Z"),
    __v: NumberInt("0"),
    price: 0
} ]);
db.getCollection("courseusers").insert([ {
    _id: ObjectId("636ad38d79a7fab62e07d52c"),
    course: ObjectId("6353075d7c9b061595ff20f3"),
    user: ObjectId("634e6bea1d5142b91afa9bb7"),
    price: NumberInt("200000"),
    createdAt: ISODate("2022-11-08T22:09:17.47Z"),
    updatedAt: ISODate("2022-11-08T22:09:17.47Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("courseusers").insert([ {
    _id: ObjectId("63b2a5215f733d2e6b3e9d5a"),
    course: ObjectId("635d494ed4d9250c10a1dadc"),
    user: ObjectId("63ad70dc5866e538812f4457"),
    price: NumberInt("0"),
    createdAt: ISODate("2023-01-02T09:34:25.464Z"),
    updatedAt: ISODate("2023-01-02T09:34:25.464Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("courseusers").insert([ {
    _id: ObjectId("63b30394737c2af31e5fbee1"),
    course: ObjectId("63ac0dcca3afd7323a7bb285"),
    user: ObjectId("634e6b0e1d5142b91afa9bb3"),
    price: NumberInt("150000"),
    createdAt: ISODate("2023-01-02T16:17:24.532Z"),
    updatedAt: ISODate("2023-01-02T16:17:24.532Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("courseusers").insert([ {
    _id: ObjectId("63b42b3dba500409f9495acf"),
    course: ObjectId("635305a1678235ce17e263cc"),
    user: ObjectId("634e6b0e1d5142b91afa9bb3"),
    price: NumberInt("0"),
    createdAt: ISODate("2023-01-03T13:18:53.188Z"),
    updatedAt: ISODate("2023-01-03T13:18:53.188Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for departments
// ----------------------------
db.getCollection("departments").drop();
db.createCollection("departments");

// ----------------------------
// Documents of departments
// ----------------------------
db.getCollection("departments").insert([ {
    _id: ObjectId("63b68879f1d06a5090090f60"),
    title: "پشتیبانی",
    createdAt: ISODate("2023-01-05T08:21:13.958Z"),
    updatedAt: ISODate("2023-01-05T08:21:13.958Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("departments").insert([ {
    _id: ObjectId("63b6888a5763c3034ca862b0"),
    title: "مشاوره",
    createdAt: ISODate("2023-01-05T08:21:30.781Z"),
    updatedAt: ISODate("2023-01-05T08:21:30.781Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("departments").insert([ {
    _id: ObjectId("63b6888f2bfc084137143ab3"),
    title: "مالی",
    createdAt: ISODate("2023-01-05T08:21:35.099Z"),
    updatedAt: ISODate("2023-01-05T08:21:35.099Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("departments").insert([ {
    _id: ObjectId("63b68895d9ea678d88ca3432"),
    title: "ارتباط با مدیریت",
    createdAt: ISODate("2023-01-05T08:21:41.276Z"),
    updatedAt: ISODate("2023-01-05T08:21:41.276Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for departmentsubs
// ----------------------------
db.getCollection("departmentsubs").drop();
db.createCollection("departmentsubs");

// ----------------------------
// Documents of departmentsubs
// ----------------------------
db.getCollection("departmentsubs").insert([ {
    _id: ObjectId("63b688c5516a30a651e98156"),
    title: "پشتیبانی دوره‌ها",
    parent: ObjectId("63b68879f1d06a5090090f60"),
    createdAt: ISODate("2023-01-05T08:22:29.015Z"),
    updatedAt: ISODate("2023-01-05T08:22:29.015Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("departmentsubs").insert([ {
    _id: ObjectId("63b688d0e1286a126a8f2ff0"),
    title: "پشتیبانی سایت",
    parent: ObjectId("63b68879f1d06a5090090f60"),
    createdAt: ISODate("2023-01-05T08:22:40.164Z"),
    updatedAt: ISODate("2023-01-05T08:22:40.164Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("departmentsubs").insert([ {
    _id: ObjectId("63b688ec7707404dd353f69c"),
    title: "مشاوره رایگان در زمینه برنامه نویسی",
    parent: ObjectId("63b6888a5763c3034ca862b0"),
    createdAt: ISODate("2023-01-05T08:23:08.236Z"),
    updatedAt: ISODate("2023-01-05T08:23:08.236Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("departmentsubs").insert([ {
    _id: ObjectId("63b68900ed3b8dfe319fcb05"),
    title: "بخش مالی",
    parent: ObjectId("63b6888f2bfc084137143ab3"),
    createdAt: ISODate("2023-01-05T08:23:28.355Z"),
    updatedAt: ISODate("2023-01-05T08:23:28.355Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("departmentsubs").insert([ {
    _id: ObjectId("63b689238ca627836e001837"),
    title: "پیشنهادات و انتقادات",
    parent: ObjectId("63b68895d9ea678d88ca3432"),
    createdAt: ISODate("2023-01-05T08:24:03.531Z"),
    updatedAt: ISODate("2023-01-05T08:24:03.531Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for infos
// ----------------------------
db.getCollection("infos").drop();
db.createCollection("infos");

// ----------------------------
// Documents of infos
// ----------------------------
db.getCollection("infos").insert([ {
    _id: ObjectId("6362959404b09c1009c56989"),
    phone: NumberLong("9921558293"),
    email: "sabzlearn@gmail.com",
    logo: "logo.png",
    createdAt: ISODate("2022-10-11T20:54:42.676Z"),
    updatedAt: ISODate("2022-10-11T20:54:42.676Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for menus
// ----------------------------
db.getCollection("menus").drop();
db.createCollection("menus");

// ----------------------------
// Documents of menus
// ----------------------------
db.getCollection("menus").insert([ {
    _id: ObjectId("6345987bd4a59348b0c6e2a7"),
    title: "فرانت اند",
    href: "/category-info/frontend",
    createdAt: ISODate("2022-10-11T16:23:23.133Z"),
    updatedAt: ISODate("2022-10-11T16:23:23.133Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("63459980d4a59348b0c6e2aa"),
    title: "بک اند",
    href: "/category-info/backend",
    createdAt: ISODate("2022-10-11T16:27:44.21Z"),
    updatedAt: ISODate("2022-10-11T16:27:44.21Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("634599e2d4a59348b0c6e2b0"),
    title: "پایتون",
    href: "/category-info/python",
    createdAt: ISODate("2022-10-11T16:29:22.692Z"),
    updatedAt: ISODate("2022-10-11T16:29:22.692Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("634599efd4a59348b0c6e2b3"),
    title: "امنیت",
    href: "/category-info/security",
    createdAt: ISODate("2022-10-11T16:29:35.449Z"),
    updatedAt: ISODate("2022-10-11T16:29:35.449Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("63459a20d4a59348b0c6e2b6"),
    title: "مهارت های نرم",
    href: "/category-info/softskills",
    createdAt: ISODate("2022-10-11T16:30:24.335Z"),
    updatedAt: ISODate("2022-10-11T16:30:24.335Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("63459d88d4a59348b0c6e2e5"),
    title: "آموزش جامع جاوا اسکریپت",
    href: "/course-info/js-expert",
    parent: ObjectId("6345987bd4a59348b0c6e2a7"),
    createdAt: ISODate("2022-10-11T16:44:56.935Z"),
    updatedAt: ISODate("2022-10-11T16:44:56.935Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("63459dc0d4a59348b0c6e2e8"),
    title: "آموزش جامع React js",
    href: "/course-info/react-expert",
    parent: ObjectId("6345987bd4a59348b0c6e2a7"),
    createdAt: ISODate("2022-10-11T16:45:52.986Z"),
    updatedAt: ISODate("2022-10-11T16:45:52.986Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("63459dced4a59348b0c6e2eb"),
    title: "آموزش Html",
    href: "/course-info/html",
    parent: ObjectId("6345987bd4a59348b0c6e2a7"),
    createdAt: ISODate("2022-10-11T16:46:06.784Z"),
    updatedAt: ISODate("2022-10-11T16:46:06.784Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("63459dd7d4a59348b0c6e2ee"),
    title: "آموزش Css",
    href: "/course-info/css-course",
    parent: ObjectId("6345987bd4a59348b0c6e2a7"),
    createdAt: ISODate("2022-10-11T16:46:15.451Z"),
    updatedAt: ISODate("2022-10-11T16:46:15.451Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("63459df0d4a59348b0c6e2f1"),
    title: "آموزش بوت استرپ",
    href: "/course-info/bootstrap",
    parent: ObjectId("6345987bd4a59348b0c6e2a7"),
    createdAt: ISODate("2022-10-11T16:46:40.236Z"),
    updatedAt: ISODate("2022-10-11T16:46:40.236Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("63459dfcd4a59348b0c6e2f4"),
    title: "آموزش ویو جی اس",
    href: "/course-info/vuejs",
    parent: ObjectId("6345987bd4a59348b0c6e2a7"),
    createdAt: ISODate("2022-10-11T16:46:52.686Z"),
    updatedAt: ISODate("2022-10-11T16:46:52.686Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("63459e22d4a59348b0c6e2f7"),
    title: "آموزش NPM",
    href: "/course-info/npm",
    parent: ObjectId("6345987bd4a59348b0c6e2a7"),
    createdAt: ISODate("2022-10-11T16:47:30.737Z"),
    updatedAt: ISODate("2022-10-11T16:47:30.737Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6345a023d4a59348b0c6e30f"),
    title: "آموزش جامع Nodejs",
    href: "/course-info/node-expert",
    parent: ObjectId("63459980d4a59348b0c6e2aa"),
    createdAt: ISODate("2022-10-11T16:56:03.837Z"),
    updatedAt: ISODate("2022-10-11T16:56:03.837Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6345a071d4a59348b0c6e312"),
    title: "آموزش دیتابیس Mysql",
    href: "/course-info/mysql-course",
    parent: ObjectId("63459980d4a59348b0c6e2aa"),
    createdAt: ISODate("2022-10-11T16:57:21.2Z"),
    updatedAt: ISODate("2022-10-11T16:57:21.2Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6345a080d4a59348b0c6e315"),
    title: "آموزش دیتابیس Mongo",
    href: "/course-info/mongo-course",
    parent: ObjectId("63459980d4a59348b0c6e2aa"),
    createdAt: ISODate("2022-10-11T16:57:36.496Z"),
    updatedAt: ISODate("2022-10-11T16:57:36.496Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6345a08fd4a59348b0c6e318"),
    title: "آموزش داکر",
    href: "/course-info/docker",
    parent: ObjectId("63459980d4a59348b0c6e2aa"),
    createdAt: ISODate("2022-10-11T16:57:51.97Z"),
    updatedAt: ISODate("2022-10-11T16:57:51.97Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6345a0b1d4a59348b0c6e31e"),
    title: "آموزش جامع PHP",
    href: "/course-info/php-expert",
    parent: ObjectId("63459980d4a59348b0c6e2aa"),
    createdAt: ISODate("2022-10-11T16:58:25.137Z"),
    updatedAt: ISODate("2022-10-11T16:58:25.137Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6345a107d4a59348b0c6e324"),
    title: "آموزش جامع پایتون",
    href: "/course-info/py-expert",
    parent: ObjectId("634599e2d4a59348b0c6e2b0"),
    createdAt: ISODate("2022-10-11T16:59:51.805Z"),
    updatedAt: ISODate("2022-10-11T16:59:51.805Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6345a12ed4a59348b0c6e32a"),
    title: "آموزش دیتا ماینینگ با پایتون",
    href: "/course-info/ai-with-py",
    parent: ObjectId("634599e2d4a59348b0c6e2b0"),
    createdAt: ISODate("2022-10-11T17:00:30.669Z"),
    updatedAt: ISODate("2022-10-11T17:00:30.669Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6345a166d4a59348b0c6e32d"),
    title: "آموزش ساخت ربات با پایتون",
    href: "/course-info/ai-with-py",
    parent: ObjectId("634599e2d4a59348b0c6e2b0"),
    createdAt: ISODate("2022-10-11T17:01:26.895Z"),
    updatedAt: ISODate("2022-10-11T17:01:26.895Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6366dd9f8d890d71eb097e05"),
    title: "فریلنسری",
    href: "/category-info/freelance",
    createdAt: ISODate("2022-11-05T22:03:11.38Z"),
    updatedAt: ISODate("2022-11-05T22:03:11.38Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("6366ddeb8d890d71eb0abf2e"),
    title: "تعیین قیمت پروژه",
    href: "/course-info/set-projects-price",
    parent: ObjectId("6366dd9f8d890d71eb097e05"),
    createdAt: ISODate("2022-11-05T22:04:27.949Z"),
    updatedAt: ISODate("2022-11-05T22:04:27.949Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("63ac46c2ffb152b67cf96e83"),
    title: "اندروید",
    href: "/category-info/android",
    createdAt: ISODate("2022-12-28T13:38:10.354Z"),
    updatedAt: ISODate("2022-12-28T13:38:10.354Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("63ac4712ffb152b67cf96ea4"),
    title: "دوره جامع اندروید استودیو",
    href: "/course-info/android-studio",
    parent: ObjectId("63ac46c2ffb152b67cf96e83"),
    createdAt: ISODate("2022-12-28T13:39:30.099Z"),
    updatedAt: ISODate("2022-12-28T13:39:30.099Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("63ac5b727cca02e062b00c6c"),
    title: "مهارت تعیین قیمت پروژه های فریلنسری",
    href: "set-projects-price",
    parent: ObjectId("63459a20d4a59348b0c6e2b6"),
    createdAt: ISODate("2022-12-28T15:06:26.216Z"),
    updatedAt: ISODate("2022-12-28T15:06:26.216Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("menus").insert([ {
    _id: ObjectId("63ac5c8e7cca02e062b00cbc"),
    title: "آموزش نصب SDK",
    href: "/course-info/install-sdk",
    parent: ObjectId("63ac46c2ffb152b67cf96e83"),
    createdAt: ISODate("2022-12-28T15:11:10.201Z"),
    updatedAt: ISODate("2022-12-28T15:11:10.201Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for newsletters
// ----------------------------
db.getCollection("newsletters").drop();
db.createCollection("newsletters");

// ----------------------------
// Documents of newsletters
// ----------------------------
db.getCollection("newsletters").insert([ {
    _id: ObjectId("6356a94b4fee1e0413552369"),
    email: "ali@gmail.com",
    createdAt: ISODate("2022-10-24T15:03:39.831Z"),
    updatedAt: ISODate("2022-10-24T15:03:39.831Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("newsletters").insert([ {
    _id: ObjectId("6357a095a3c3a232262220fd"),
    email: "ce01010101it@gmail.com",
    createdAt: ISODate("2022-10-25T08:38:45.143Z"),
    updatedAt: ISODate("2022-10-25T08:38:45.143Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("newsletters").insert([ {
    _id: ObjectId("6357a0f8a3c3a232262295a7"),
    email: "amin@gmail.com",
    createdAt: ISODate("2022-10-25T08:40:24.429Z"),
    updatedAt: ISODate("2022-10-25T08:40:24.429Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("newsletters").insert([ {
    _id: ObjectId("6357a159a3c3a23226230311"),
    email: "sasan@gmail.com",
    createdAt: ISODate("2022-10-25T08:42:01.646Z"),
    updatedAt: ISODate("2022-10-25T08:42:01.646Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("newsletters").insert([ {
    _id: ObjectId("6357a1a19013f833b935ee98"),
    email: "davad@dv.com",
    createdAt: ISODate("2022-10-25T08:43:13.275Z"),
    updatedAt: ISODate("2022-10-25T08:43:13.275Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("newsletters").insert([ {
    _id: ObjectId("6357d911429631a96fd5939d"),
    email: "qadir@gmail.com",
    createdAt: ISODate("2022-10-25T12:39:45.683Z"),
    updatedAt: ISODate("2022-10-25T12:39:45.683Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("newsletters").insert([ {
    _id: ObjectId("6357daa6429631a96fd5a7f5"),
    email: "ali@gmail.com",
    createdAt: ISODate("2022-10-25T12:46:30.451Z"),
    updatedAt: ISODate("2022-10-25T12:46:30.451Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("newsletters").insert([ {
    _id: ObjectId("6357dad2429631a96fd5bfa3"),
    email: "hasan@gmail.com",
    createdAt: ISODate("2022-10-25T12:47:14.623Z"),
    updatedAt: ISODate("2022-10-25T12:47:14.623Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("newsletters").insert([ {
    _id: ObjectId("6357daef429631a96fd5d86f"),
    email: "moz@gmail.com",
    createdAt: ISODate("2022-10-25T12:47:43.232Z"),
    updatedAt: ISODate("2022-10-25T12:47:43.232Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("newsletters").insert([ {
    _id: ObjectId("6357db2b429631a96fd62d83"),
    email: "moooooz@gmail.com",
    createdAt: ISODate("2022-10-25T12:48:43.782Z"),
    updatedAt: ISODate("2022-10-25T12:48:43.782Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("newsletters").insert([ {
    _id: ObjectId("6357db51429631a96fd66113"),
    email: "ioi@gmail.com",
    createdAt: ISODate("2022-10-25T12:49:21.256Z"),
    updatedAt: ISODate("2022-10-25T12:49:21.256Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("newsletters").insert([ {
    _id: ObjectId("6357db7e429631a96fd6a030"),
    email: "odsnv@gmail.ir",
    createdAt: ISODate("2022-10-25T12:50:06.784Z"),
    updatedAt: ISODate("2022-10-25T12:50:06.784Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("newsletters").insert([ {
    _id: ObjectId("6357dbfa429631a96fd71f85"),
    email: "mobin@gmail.com",
    createdAt: ISODate("2022-10-25T12:52:10.297Z"),
    updatedAt: ISODate("2022-10-25T12:52:10.297Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("newsletters").insert([ {
    _id: ObjectId("6357ded9429631a96fdbf1d1"),
    email: "amin@gmail.com",
    createdAt: ISODate("2022-10-25T13:04:25.845Z"),
    updatedAt: ISODate("2022-10-25T13:04:25.845Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("newsletters").insert([ {
    _id: ObjectId("6357df7a429631a96fdd3223"),
    email: "hbnik@fsv.com",
    createdAt: ISODate("2022-10-25T13:07:06.656Z"),
    updatedAt: ISODate("2022-10-25T13:07:06.656Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("newsletters").insert([ {
    _id: ObjectId("6357df95429631a96fdd6a65"),
    email: "jojmo@gsdbv.com",
    createdAt: ISODate("2022-10-25T13:07:33.423Z"),
    updatedAt: ISODate("2022-10-25T13:07:33.423Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("newsletters").insert([ {
    _id: ObjectId("6357e38e429631a96fe4f447"),
    email: "dsv@sdv.cd",
    createdAt: ISODate("2022-10-25T13:24:30.822Z"),
    updatedAt: ISODate("2022-10-25T13:24:30.822Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("newsletters").insert([ {
    _id: ObjectId("63a46f433487f9c7b81363bd"),
    email: "ftm_rahmani@gmail.com",
    createdAt: ISODate("2022-12-22T14:52:51.987Z"),
    updatedAt: ISODate("2022-12-22T14:52:51.987Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("newsletters").insert([ {
    _id: ObjectId("63a46f693487f9c7b81363d5"),
    email: "ftm_rahmani@gmail.com",
    createdAt: ISODate("2022-12-22T14:53:29.126Z"),
    updatedAt: ISODate("2022-12-22T14:53:29.126Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("newsletters").insert([ {
    _id: ObjectId("63a46fb33487f9c7b81363ed"),
    email: "ftm_rahmani@gmail.com",
    createdAt: ISODate("2022-12-22T14:54:43.848Z"),
    updatedAt: ISODate("2022-12-22T14:54:43.848Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("newsletters").insert([ {
    _id: ObjectId("63a470823487f9c7b8136405"),
    email: "test@gmail.com",
    createdAt: ISODate("2022-12-22T14:58:10.096Z"),
    updatedAt: ISODate("2022-12-22T14:58:10.096Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("newsletters").insert([ {
    _id: ObjectId("63a470ba3487f9c7b813641d"),
    email: "ali_abdi@gmail.com",
    createdAt: ISODate("2022-12-22T14:59:06.08Z"),
    updatedAt: ISODate("2022-12-22T14:59:06.08Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for notifications
// ----------------------------
db.getCollection("notifications").drop();
db.createCollection("notifications");

// ----------------------------
// Documents of notifications
// ----------------------------
db.getCollection("notifications").insert([ {
    _id: ObjectId("635a6bc3e2f84a0f2ec27e8f"),
    msg: "سرفصل های دوره جدید رو آماده کنید",
    admin: ObjectId("634e6b0e1d5142b91afa9bb3"),
    createdAt: ISODate("2022-10-27T11:30:11.077Z"),
    updatedAt: ISODate("2023-07-17T10:22:13.662Z"),
    __v: NumberInt("0"),
    see: NumberInt("0")
} ]);
db.getCollection("notifications").insert([ {
    _id: ObjectId("635a6bd114cf4ecb540b5495"),
    msg: "بخش پشتیبانی دوره جی‌اس رو چک کنید",
    admin: ObjectId("634e6b0e1d5142b91afa9bb3"),
    createdAt: ISODate("2022-10-27T11:30:25.229Z"),
    updatedAt: ISODate("2023-07-17T10:26:20.429Z"),
    __v: NumberInt("0"),
    see: NumberInt("0")
} ]);
db.getCollection("notifications").insert([ {
    _id: ObjectId("635a6bdfa2a70e40d71e2420"),
    msg: "دوره ری‌اکت دا آپدیت کنید",
    admin: ObjectId("634e6b0e1d5142b91afa9bb3"),
    createdAt: ISODate("2022-10-27T11:30:39.532Z"),
    updatedAt: ISODate("2023-07-17T10:26:21.015Z"),
    __v: NumberInt("0"),
    see: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for offs
// ----------------------------
db.getCollection("offs").drop();
db.createCollection("offs");

// ----------------------------
// Documents of offs
// ----------------------------
db.getCollection("offs").insert([ {
    _id: ObjectId("636704e039942774e9520267"),
    code: "react_50",
    percent: "50",
    course: ObjectId("635f05d6fd9e8fcba0d2c909"),
    max: NumberInt("1"),
    uses: NumberInt("0"),
    creator: ObjectId("634e6b0e1d5142b91afa9bb3"),
    createdAt: ISODate("2022-11-06T00:50:40.593Z"),
    updatedAt: ISODate("2022-11-06T00:50:40.593Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("offs").insert([ {
    _id: ObjectId("636927a6ca3c98516b658f40"),
    code: "nodejs_50",
    percent: "50",
    course: ObjectId("6345cda6474f74e04218f6f7"),
    max: NumberInt("1"),
    uses: NumberInt("0"),
    creator: ObjectId("634e6b0e1d5142b91afa9bb3"),
    createdAt: ISODate("2022-11-07T15:43:34.415Z"),
    updatedAt: ISODate("2022-11-07T15:43:34.415Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("offs").insert([ {
    _id: ObjectId("63692d65ca3c98516b7b863a"),
    code: "bs35",
    percent: "35",
    course: ObjectId("635d494ed4d9250c10a1dadc"),
    max: NumberInt("5"),
    uses: NumberInt("0"),
    creator: ObjectId("634e6bea1d5142b91afa9bb7"),
    createdAt: ISODate("2022-11-07T16:08:05.99Z"),
    updatedAt: ISODate("2022-11-08T16:57:30.029Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("offs").insert([ {
    _id: ObjectId("636ad36279a7fab62e06f052"),
    code: "css_50",
    percent: "50",
    course: ObjectId("6353075d7c9b061595ff20f3"),
    max: NumberInt("1"),
    uses: NumberInt("1"),
    creator: ObjectId("634e6bea1d5142b91afa9bb7"),
    createdAt: ISODate("2022-11-08T22:08:34.615Z"),
    updatedAt: ISODate("2022-11-08T22:09:17.455Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("offs").insert([ {
    _id: ObjectId("63b300f90af56b7ddf9447ec"),
    code: "canvas_raad_40",
    percent: "40",
    course: ObjectId("63ac0dcca3afd7323a7bb285"),
    max: NumberInt("1"),
    uses: NumberInt("1"),
    creator: ObjectId("634e6b0e1d5142b91afa9bb3"),
    createdAt: ISODate("2023-01-02T16:06:17.255Z"),
    updatedAt: ISODate("2023-01-02T16:06:51.749Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("offs").insert([ {
    _id: ObjectId("63b302940af56b7ddf94482e"),
    code: "canvas50",
    percent: "50",
    course: ObjectId("63ac0dcca3afd7323a7bb285"),
    max: NumberInt("1"),
    uses: NumberInt("1"),
    creator: ObjectId("634e6b0e1d5142b91afa9bb3"),
    createdAt: ISODate("2023-01-02T16:13:08.1Z"),
    updatedAt: ISODate("2023-01-02T16:13:26.211Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("offs").insert([ {
    _id: ObjectId("63b30381737c2af31e5fbed7"),
    code: "canvas_50",
    percent: "50",
    course: ObjectId("63ac0dcca3afd7323a7bb285"),
    max: NumberInt("1"),
    uses: NumberInt("1"),
    creator: ObjectId("634e6b0e1d5142b91afa9bb3"),
    createdAt: ISODate("2023-01-02T16:17:05.22Z"),
    updatedAt: ISODate("2023-01-02T16:17:24.502Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for sessions
// ----------------------------
db.getCollection("sessions").drop();
db.createCollection("sessions");

// ----------------------------
// Documents of sessions
// ----------------------------
db.getCollection("sessions").insert([ {
    _id: ObjectId("6345daddda1fd01ed3545316"),
    title: "مفاهیم مقدماتی مربوط به بک اند",
    course: ObjectId("6345cfc7586b68648f7f2430"),
    createdAt: ISODate("2022-10-11T21:06:37.95Z"),
    updatedAt: ISODate("2022-10-11T21:06:37.95Z"),
    __v: NumberInt("0"),
    time: "12:14",
    free: 0
} ]);
db.getCollection("sessions").insert([ {
    _id: ObjectId("6345dbc6668364438dc24472"),
    title: "آموزش کاستوم هوک",
    course: ObjectId("6345cfc7586b68648f7f2430"),
    createdAt: ISODate("2022-10-11T21:10:30.705Z"),
    updatedAt: ISODate("2022-10-11T21:10:30.705Z"),
    __v: NumberInt("0"),
    time: "09:18",
    free: 0
} ]);
db.getCollection("sessions").insert([ {
    _id: ObjectId("636252530fda8658687d581c"),
    title: "آشنایی اولیه با متد toFixed",
    time: "12:09",
    video: "b36e8afba55d2275896e1fbda77ec47f7981e20c230f3470f8678b2fc6160515.mp4",
    course: ObjectId("635f05d6fd9e8fcba0d2c909"),
    createdAt: ISODate("2022-11-02T11:19:47.677Z"),
    updatedAt: ISODate("2022-11-02T11:19:47.677Z"),
    __v: NumberInt("0"),
    free: 1
} ]);
db.getCollection("sessions").insert([ {
    _id: ObjectId("636252edc1e677a316578e7a"),
    title: "نحوه پیاده سازی پروژه فلان",
    time: "19:21",
    video: "b36e8afba55d2275896e1fbda77ec47f7981e20c230f3470f8678b2fc6160515.mp4",
    course: ObjectId("635f05d6fd9e8fcba0d2c909"),
    createdAt: ISODate("2022-11-02T11:22:21.731Z"),
    updatedAt: ISODate("2022-11-02T11:22:21.731Z"),
    __v: NumberInt("0"),
    free: 1
} ]);
db.getCollection("sessions").insert([ {
    _id: ObjectId("6362bbaf4041a372f5585532"),
    title: "کار با لایبرری SweetAlert",
    time: "19:15",
    video: "b36e8afba55d2275896e1fbda77ec47f7981e20c230f3470f8678b2fc6160515.mp4",
    free: NumberInt("0"),
    course: ObjectId("635f05d6fd9e8fcba0d2c909"),
    createdAt: ISODate("2022-11-02T18:49:19.876Z"),
    updatedAt: ISODate("2022-11-02T18:49:19.876Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("sessions").insert([ {
    _id: ObjectId("6364ceb7f059641530fef964"),
    title: "کار با لایبرری swiper js",
    time: "12:00",
    video: "b36e8afba55d2275896e1fbda77ec47f7981e20c230f3470f8678b2fc6160515.mp4",
    free: NumberInt("0"),
    course: ObjectId("635f05d6fd9e8fcba0d2c909"),
    createdAt: ISODate("2022-11-04T08:35:03.825Z"),
    updatedAt: ISODate("2022-11-04T08:35:03.825Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("sessions").insert([ {
    _id: ObjectId("6364d48af0596415300eea26"),
    title: "کار با لایبرری chartjs",
    time: "10:00",
    video: "7ea96a7e8f7c9bced14ac7.mp4",
    free: NumberInt("1"),
    course: ObjectId("635f05d6fd9e8fcba0d2c909"),
    createdAt: ISODate("2022-11-04T08:59:54.196Z"),
    updatedAt: ISODate("2022-11-04T08:59:54.196Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("sessions").insert([ {
    _id: ObjectId("6364d4eef059641530105022"),
    title: "کار با لایبرری owljs",
    time: "20:00",
    video: "b36e8afba55d2275896e1fbda77ec47f7981e20c230f3470f8678b2fc6160515.mp4",
    free: NumberInt("1"),
    course: ObjectId("635f05d6fd9e8fcba0d2c909"),
    createdAt: ISODate("2022-11-04T09:01:34.853Z"),
    updatedAt: ISODate("2022-11-04T09:01:34.853Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("sessions").insert([ {
    _id: ObjectId("636505210e9c71df7814546f"),
    title: "کار با کتابخونه Redux",
    time: "18:12",
    video: "95f85a31ed5fbb83d43bbe85ee113059e24381ae4d4ed59a2ca6f165005909ba.mp4",
    free: NumberInt("1"),
    course: ObjectId("635f05d6fd9e8fcba0d2c909"),
    createdAt: ISODate("2022-11-04T12:27:13.468Z"),
    updatedAt: ISODate("2022-11-04T12:27:13.468Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("sessions").insert([ {
    _id: ObjectId("63b04d2046626045780c3091"),
    title: "تشخیص اموجی با RegEx",
    time: "19:13",
    video: "6e865e1b07beca18f2bcdb05f582bcf15035486ad6f11090b0575725c3350527.mp4",
    free: NumberInt("0"),
    course: ObjectId("63ac09b2eac86a8e8a018b89"),
    createdAt: ISODate("2022-12-31T14:54:24.12Z"),
    updatedAt: ISODate("2022-12-31T14:54:24.12Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("sessions").insert([ {
    _id: ObjectId("63b42a53ba500409f9495aac"),
    title: "جلسه تستی برای ویو جی اس",
    time: "10:00",
    video: "9b6a450070964dca6fff58484d0ea2732782ae973d97cef1ab3a2fc73286a942.zip",
    free: NumberInt("0"),
    course: ObjectId("635305a1678235ce17e263cc"),
    createdAt: ISODate("2023-01-03T13:14:59.121Z"),
    updatedAt: ISODate("2023-01-03T13:14:59.121Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for tickets
// ----------------------------
db.getCollection("tickets").drop();
db.createCollection("tickets");

// ----------------------------
// Documents of tickets
// ----------------------------
db.getCollection("tickets").insert([ {
    _id: ObjectId("63b69afa12bd601354d496ed"),
    departmentID: ObjectId("63b68879f1d06a5090090f60"),
    departmentSubID: ObjectId("63b688d0e1286a126a8f2ff0"),
    priority: NumberInt("1"),
    title: "درخواست همکاری",
    body: "با سلام و وقت بخیر. در صورت امکان میخواستم در زمینه پشتیبانی سبزلرن باهاتون همکاری داشته باشم و ....",
    user: ObjectId("634e6b0e1d5142b91afa9bb3"),
    answer: NumberInt("1"),
    course: ObjectId("634e6b0e1d5142b91afa9bb3"),
    isAnswer: NumberInt("0"),
    createdAt: ISODate("2023-01-05T09:40:10.516Z"),
    updatedAt: ISODate("2023-01-05T16:09:39.693Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("tickets").insert([ {
    _id: ObjectId("63b69b8f12bd601354d49717"),
    departmentID: ObjectId("63b6888f2bfc084137143ab3"),
    departmentSubID: ObjectId("63b68900ed3b8dfe319fcb05"),
    priority: NumberInt("2"),
    title: "ثبت نام بصورت قسطی",
    body: "با سلام. امکانش هست تو دوره ری‌اکت به صورت قسطی ثبت نام بکنم؟‌با تشکر",
    user: ObjectId("634e6b0e1d5142b91afa9bb3"),
    answer: NumberInt("1"),
    course: ObjectId("634e6b0e1d5142b91afa9bb3"),
    isAnswer: NumberInt("0"),
    createdAt: ISODate("2023-01-05T09:42:39.897Z"),
    updatedAt: ISODate("2023-01-05T16:45:14.399Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("tickets").insert([ {
    _id: ObjectId("63b69cb412bd601354d4972a"),
    departmentID: ObjectId("63b68895d9ea678d88ca3432"),
    departmentSubID: ObjectId("63b689238ca627836e001837"),
    priority: NumberInt("1"),
    title: "پیشنهاد دوره نود",
    body: "با سلام. لطفا در صورت امکان دوره متخصص نود جی اس رو سریع‌تر استارت بزنین",
    user: ObjectId("634e6b0e1d5142b91afa9bb3"),
    answer: NumberInt("1"),
    course: ObjectId("634e6b0e1d5142b91afa9bb3"),
    isAnswer: NumberInt("0"),
    createdAt: ISODate("2023-01-05T09:47:32.498Z"),
    updatedAt: ISODate("2023-01-05T16:24:06.667Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("tickets").insert([ {
    _id: ObjectId("63b6a2b622722694d21cf505"),
    departmentID: ObjectId("63b68879f1d06a5090090f60"),
    departmentSubID: ObjectId("63b688c5516a30a651e98156"),
    priority: NumberInt("1"),
    title: "دریافت لینک گروه پشتیبانی",
    body: "با سلام. لطفا لینک عضویت گروه پشتیبانی دوره ویو رو برام ارسال کنین. خیلی ممنونم.",
    user: ObjectId("634e6b0e1d5142b91afa9bb3"),
    answer: NumberInt("0"),
    course: ObjectId("634e6b0e1d5142b91afa9bb3"),
    isAnswer: NumberInt("0"),
    createdAt: ISODate("2023-01-05T10:13:10.406Z"),
    updatedAt: ISODate("2023-01-05T10:13:10.406Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("tickets").insert([ {
    _id: ObjectId("63b6f64313796a8e966d73f9"),
    departmentID: ObjectId("63b68879f1d06a5090090f60"),
    departmentSubID: ObjectId("63b688d0e1286a126a8f2ff0"),
    priority: NumberInt("1"),
    title: "درخواست همکاری",
    body: "با سلام. لطفا رزومتونو برامون از بخش ارتباط با ما آپلود کنید.",
    user: ObjectId("634e6b0e1d5142b91afa9bb3"),
    answer: NumberInt("0"),
    parent: ObjectId("63b69afa12bd601354d496ed"),
    course: ObjectId("634e6b0e1d5142b91afa9bb3"),
    isAnswer: NumberInt("1"),
    createdAt: ISODate("2023-01-05T16:09:39.683Z"),
    updatedAt: ISODate("2023-01-05T16:09:39.683Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("tickets").insert([ {
    _id: ObjectId("63b6f9a6c4277ceb089ce7df"),
    departmentID: ObjectId("63b68895d9ea678d88ca3432"),
    departmentSubID: ObjectId("63b689238ca627836e001837"),
    priority: NumberInt("1"),
    title: "پیشنهاد دوره نود",
    body: "با سلام. دوره نود از اسفند ماه استارت خواهد خورد",
    user: ObjectId("634e6b0e1d5142b91afa9bb3"),
    answer: NumberInt("0"),
    parent: ObjectId("63b69cb412bd601354d4972a"),
    course: ObjectId("634e6b0e1d5142b91afa9bb3"),
    isAnswer: NumberInt("1"),
    createdAt: ISODate("2023-01-05T16:24:06.661Z"),
    updatedAt: ISODate("2023-01-05T16:24:06.661Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("tickets").insert([ {
    _id: ObjectId("63b6fe9ac4277ceb089ce890"),
    departmentID: ObjectId("63b6888f2bfc084137143ab3"),
    departmentSubID: ObjectId("63b68900ed3b8dfe319fcb05"),
    priority: NumberInt("2"),
    title: "ثبت نام بصورت قسطی",
    body: "با سلام. نه متاسفانه. ثبت نام بصورت قسطی از قوانین سبزلرن نمی باشد",
    user: ObjectId("634e6b0e1d5142b91afa9bb3"),
    answer: NumberInt("0"),
    parent: ObjectId("63b69b8f12bd601354d49717"),
    course: ObjectId("634e6b0e1d5142b91afa9bb3"),
    isAnswer: NumberInt("1"),
    createdAt: ISODate("2023-01-05T16:45:14.396Z"),
    updatedAt: ISODate("2023-01-05T16:45:14.396Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");
db.getCollection("users").createIndex({
    email: NumberInt("1")
}, {
    name: "email_1",
    background: true,
    unique: true
});

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("6364cd5d1824acb78ca02083"),
    username: "sina_mmdi",
    email: "sinammdi@gmail.com",
    password: "$2b$12$R60U7spioPbU3ZK9cVcr/ugmHdsESkl3jCAnsY6Zb4L.O1.QSEj1a",
    name: "سینا محمدی",
    phone: "09192345123",
    role: "USER",
    createdAt: ISODate("2022-11-04T08:29:17.181Z"),
    updatedAt: ISODate("2022-11-04T08:29:17.181Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("636a62204950b7db7101093c"),
    username: "mahdi_mrtzvi",
    email: "mahdi@gmail.com",
    password: "$2b$12$EQnO9Ba/sOVoqIlK8i8ZZ.P5clAXB0Nqm/K48jwisJ39j5sSImY76",
    name: "مهدی مرتضوی",
    phone: "09912341890",
    role: "USER",
    createdAt: ISODate("2022-11-08T14:05:20.158Z"),
    updatedAt: ISODate("2022-11-08T14:05:20.158Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("63987d39feec6511986b80a6"),
    username: "ramin_mohseni",
    email: "mohseni@gmail.com",
    password: "$2b$12$WrATbJCfyIukkhO9vqKskuu5a36FRWt9xMVSSfbNeOfnd3Raa6HHy",
    name: "رامین محسنی",
    phone: "09912348715",
    role: "USER",
    createdAt: ISODate("2022-12-13T13:25:13.041Z"),
    updatedAt: ISODate("2022-12-13T13:25:13.041Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("63987e28feec6511986b80ab"),
    username: "ali_abdi",
    email: "abdi@gmail.com",
    password: "$2b$12$jLfJhLqEcNPGzzQFx0WRme7GygA8ZCVUErBsdZeyaGqAToMoucmZ6",
    name: "علی عبدی",
    phone: "09921559821",
    role: "USER",
    createdAt: ISODate("2022-12-13T13:29:12.496Z"),
    updatedAt: ISODate("2022-12-13T13:29:12.496Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("639884376c330489a999b6a4"),
    username: "ftm_mmdi",
    email: "ftm_mhmdi@gmail.com",
    password: "$2b$12$Z33IE4v829gJEU6XD1AwgulQAan2YwCjyPNAbvj47q2JnjdToTCh.",
    name: "فاطمه محمدی",
    phone: "09912348713",
    role: "USER",
    createdAt: ISODate("2022-12-13T13:55:03.729Z"),
    updatedAt: ISODate("2022-12-13T13:55:03.729Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("639885ec6c330489a999b6ab"),
    username: "ahmad_mmdi",
    email: "ahmad_mmdi@gmail.com",
    password: "$2b$12$7NozCcs5EWzI9iEA/No9mOicIBIRg3h4WQ9bNPC3DLCKimT9kC8.q",
    name: "احمد محمدی",
    phone: "09912348715",
    role: "USER",
    createdAt: ISODate("2022-12-13T14:02:20.342Z"),
    updatedAt: ISODate("2022-12-13T14:02:20.342Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("63988c2f05e8858b5049fc7f"),
    username: "ali_abdi2020",
    email: "abdi2021@gmail.com",
    password: "$2b$12$I/NKqk.1ZyXpARqWPWeKXu9VPLWR29JuE1RiaKPuScQAA342AuK1.",
    name: "علیرضا عبدی",
    phone: "09923162051",
    role: "USER",
    createdAt: ISODate("2022-12-13T14:29:03.693Z"),
    updatedAt: ISODate("2022-12-13T14:29:03.693Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("6399948e0c0919c962751a12"),
    username: "ftm_rahmani",
    email: "ftm_rahmani@gmail.com",
    password: "$2b$12$063iUxFFLxqufKY9duB8veCZu4ZBA/6rziPcIjJmAHcSav3wM5IWu",
    name: "فاطمه رحمانی",
    phone: "09923162391",
    role: "ADMIN",
    createdAt: ISODate("2022-12-14T09:17:02.054Z"),
    updatedAt: ISODate("2023-01-03T10:17:53.667Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("63ad78746c2833b84df511a5"),
    username: "hamid_mmdi",
    email: "hamid@gmail.com",
    password: "$2b$12$V0igrvmP12/GIW6ejHM57Ovshx6MLSyOg1CcJtfRFnJ.5b6EON3rW",
    name: "حمید محمدی",
    phone: "09908765412",
    role: "USER",
    createdAt: ISODate("2022-12-29T11:22:28.116Z"),
    updatedAt: ISODate("2022-12-29T11:22:28.116Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("63ad78ea6c2833b84df511cb"),
    username: "ramin_asgari",
    email: "ramin1212@gmail.com",
    password: "$2b$12$RFx.4ZeF4LJaXdh31rneIOYxDcxwBFhPs2lnv9RjxIlRPkqF9EuHG",
    name: "رامین اصغری",
    phone: "09912890180",
    role: "USER",
    createdAt: ISODate("2022-12-29T11:24:26.073Z"),
    updatedAt: ISODate("2022-12-29T11:24:26.073Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("64b537232fe86bc45c307080"),
    username: "admin",
    email: "admin@gmail.com",
    password: "$2b$12$2.0S0DsVN.NZMAIqxr70YulLYHv7vRyzfP0clEx4OFTo.0axkuPBy",
    name: "admin ali",
    phone: "09123456789",
    role: "USER",
    createdAt: ISODate("2023-07-17T12:42:11.4Z"),
    updatedAt: ISODate("2023-07-17T12:42:11.4Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("64b53b5b2fe86bc45c31f826"),
    username: "sahar",
    email: "sahar@gmail.com",
    password: "$2b$12$JZ4wnHpnnA2b7Nm8R88L.eZo2SY5qyM/39qyLdNeY1S6fiqj9BXva",
    name: "saharmansouri",
    phone: "09133744997",
    role: "ADMIN",
    createdAt: ISODate("2023-07-17T13:00:11.095Z"),
    updatedAt: ISODate("2023-07-17T13:00:11.095Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("64b7841135959733bd352d0d"),
    username: "saharsahar",
    email: "saharsahar@gmail.com",
    password: "$2b$12$P2a7M0hu8wMORwTdVWd12.SHyKlYPfRwp.JWAKWgB.dIPXuDQdaJy",
    name: "saharsahar",
    phone: "09132589208",
    role: "USER",
    createdAt: ISODate("2023-07-19T06:34:57.462Z"),
    updatedAt: ISODate("2023-07-19T06:34:57.462Z"),
    __v: NumberInt("0")
} ]);
