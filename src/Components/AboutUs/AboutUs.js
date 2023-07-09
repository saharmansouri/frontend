import AboutUsBox from '../AboutUsBox/AboutUsBox'
import SectionHeader from '../SectionHeader/SectionHeader'
import './AboutUs.css'

import React from 'react'

export default function AboutUs() {
    return (

        <div className="about-us">
            <div className="container">
                <div className="about-us__header">
                    <SectionHeader
                        title='ما چه کمکی بهتون میکنیم؟'
                        desc='از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست' />
                    <div className="container">
                        <div className="row">
                            <AboutUsBox title='دوره های اختصاصی' desc='با پشتیبانی و کیفیت بالا ارائه میده !' icon='fa-copyright' />
                            <AboutUsBox title='اجازه تدریس' desc='
                            به هر مدرسی رو نمیده. چون کیفیت براش مهمه !' icon='fa-leaf' />
                            <AboutUsBox title='دوره پولی و رایگان' desc='براش مهم نیست. به مدرسینش حقوق میده تا نهایت کیفیت رو در پشتیبانی و
                  اپدیت دوره ارائه بده' icon='fa-gem' />
                            <AboutUsBox title='اهمیت به کاربر' desc='اولویت اول و آخر آکادمی آموزش برنامه نویسی سبزلرن اهمیت به کاربرها و
                  رفع نیاز های آموزشی و رسوندن اونها به بازار کار هست' icon='fa-crown' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
