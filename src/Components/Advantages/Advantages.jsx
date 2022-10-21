import React from "react";

function Advantages() {
  return (
    <section>
      {/* Start ==> "why choose nobitxe" section */}
      <div className='p-16'>
        {/*Start ==> Title */}
        <div className='mb-10 text-3xl font-medium text-center'>
          چرا نوبیتکس را انتخاب کنیم؟
        </div>
        {/*End ==> Title */}

        {/*Start ==> Card */}
        <div className='flex py-5'>
          <div className='flex flex-col items-center'>
            <div className='w-40 mb-12'>
              <img
                src='../../assets/images/why1.fe46a70.webp'
                className='w-full'
              />
            </div>
            <h3 className='mb-4 text-lg font-bold'>ساده و کاربردی</h3>
            <p className='text-sm text-center text-slate-600'>
              محیط ساده و کاربردی نوبیتکس، معامله ارزدیجیتال را برای شما لذت بخش
              خواهد کرد.
            </p>
          </div>

          <div className='flex flex-col items-center mx-28 '>
            <div className='mb-12 w-30'>
              <img
                src='../../assets/images/why2.76a5171.webp'
                className='w-full'
              />
            </div>
            <h3 className='mb-4 text-lg font-bold'>خرید و فروش امن</h3>
            <p className='text-sm text-center text-slate-600'>
              اولویت نوبیتکس امنیت است. با خیالی آسوده و بدون نگرانی خرید و فروش
              کنید.
            </p>
          </div>

          <div className='flex flex-col items-center'>
            <div className='mb-12 w-36'>
              <img
                src='../../assets/images/why3.1ed2508.webp'
                className='w-full'
              />
            </div>
            <h3 className='mb-4 text-lg font-bold'>پیشرو و سریع</h3>
            <p className='text-sm text-center text-slate-600'>
              تنوع رمزارزها و سرعت معاملات، نوبیتکس را جزو بهترین بازارهای
              آنلاین قرار داده است.
            </p>
          </div>
        </div>
        {/*End ==> Card */}
      </div>
      {/* End ==> "why choose nobitxe" section */}

      {/* Start ==> "Benefit" section */}
      <div className='px-10 py-16 bg-gray-100'>
        {/*Start ==> Title */}
        <div className='mb-16'>
          <p className='text-3xl font-bold text-center '>
            بهترین امکانات خرید و فروش ارزهای دیجیتال
          </p>
        </div>
        {/*End ==> Title */}

        {/*Start ==> Card */}
        <div className='flex justify-between w-full'>
          {/* Content (right div) */}
          <div className='flex flex-col justify-between h-[450px] '>
            <div className='flex items-center'>
              <div className='flex items-center justify-center w-32 h-20  ml-4 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,10%)]'>
                <img
                  src='../../assets/images/download.webp'
                  className='w-11'
                ></img>
              </div>
              <div>
                <h2 className='mb-3 text-lg font-bold'>
                  مدیریت موجودی کیف پول
                </h2>
                <p className='text-sm text-slate-600'>
                  رمزارزهای دیجیتال محبوب را خرید و فروش کنید و در یکجا وضعیت
                  موجودی خود را دنبال کنید
                </p>
              </div>
            </div>

            <div className='flex items-center'>
              <div className='flex items-center justify-center w-28 h-20 ml-4 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,10%)]'>
                <img
                  src='../../assets/images/download (1).webp'
                  className='w-11'
                ></img>
              </div>
              <div>
                <h2 className='mb-3 text-lg font-bold'>
                  پرداخت با کارت‌های شتاب
                </h2>
                <p className='text-sm text-slate-600'>
                  معامله انواع رمزارز با تومان از طریق واریز و برداشت با
                  کارت‌های بانکی عضو شتاب
                </p>
              </div>
            </div>

            <div className='flex items-center'>
              <div className='flex items-center justify-center w-32 h-20 ml-4 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,10%)]'>
                <img
                  src='../../assets/images/download (2).webp'
                  className='w-11'
                ></img>
              </div>
              <div>
                <h2 className='mb-3 text-lg font-bold'>کیف پول امن</h2>
                <p className='text-sm text-slate-600'>
                  رمز اختصاصی کیف پول شما به صورت آفلاین نگهداری می شود و در
                  برابر هک ایمن خواهد بود
                </p>
              </div>
            </div>

            <div className='flex items-center'>
              <div className='flex items-center justify-center w-32 h-20 ml-4 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,10%)]'>
                <img
                  src='../../assets/images/download (3).webp'
                  className='w-11'
                ></img>
              </div>
              <div>
                <h2 className='mb-3 text-lg font-bold'>کارمزد رقابتی</h2>
                <p className='text-sm text-slate-600'>
                  کارمزد خرید و فروش در نوبیتکس بسیار کم است و با بالاتر رفتن
                  حجم معاملات کاهش می‌یابد
                </p>
              </div>
            </div>
          </div>

          {/* Image (left div) */}
          <div className='flex justify-end items-center w-full'>
            <img
              src='../../assets/images/app-screenshot.743295f.webp'
              className='w-auto'
            />
          </div>
        </div>
        {/*End ==> Card */}
      </div>
      {/* End ==> "Benefit" section */}
    </section>
  );
}

export default Advantages;
