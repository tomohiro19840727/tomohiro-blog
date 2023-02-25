import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className='bg-white py-6 sm:py-8 lg:py-12 bg-h-screen w-full bg-gradient-to-br
  from-violet-300 via-blue-100 to-orange-100'>
      <section className='text-gray-700' id='home'>
    <div className='flex containermx-auto py-20 px-5 flex-col md:flex-row items-center '>
      <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
        <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>はじめまして！！
          <br />
          目指すは、
          <br /><h2 className='text-6xl text-blue-700'></h2>『フロントエンジニア』です!
          <br />
          <br/>
          
        </h1>
        <p className='mb-8 leading-relaxed text-xl font-bold'>競走馬を育てる仕事をした後、農家の仕事をしていましたが今はコールセンターで働きながら、プログラミングの勉強をしています。今後、勉強になったことを公開していきますのでどうかよろしくお願いします。</p>
        
      </div>
        <div className='md:w-1/2 lg:max-w-lg w-5/6'>
          <img src='./img/10ellyfdesk845_TP_V4.jpg' alt='' />
        </div>
    </div>
   </section>
    </div>

<section className='text-gray-700 border-t border-gray-200 bg-white py-6 sm:py-8 lg:py-12 bg-h-screen w-full bg-gradient-to-br
  from-violet-300 via-blue-500 to-orange-100' >
    <div className='container px-5 py-24 mx-auto'>
      <div className='text-center md-20'>
        <h1 className='text-2xl sm:text-3xl mb-2 text-gray-900 font-bold'>最新の投稿情報</h1>
      </div>

      <div className='flex flex-wrap'>
        <div className='md:w-1/3 p-4'>
          <div className='bg-gray-200 rounded-lg p-8'>
            <div className='flex items-center mb-3'>
              <div className='bg-green-500 text-white rounded-full'>
              <svg width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
    fill="currentColor"
    />
</svg>
              </div>
             <h2 className='text-gray-900 text-lg font-bold ml-2'>タイトル</h2>
            </div>
             <div>
                  <Link to='/sleep' className='flex mt-3 text-green-500 items-center font-bold'>詳細
                  <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                        />
                        </svg>  
                  </Link>
             </div>
          </div>
        </div>
        <div className='md:w-1/3 p-4'>
          <div className='bg-gray-200 rounded-lg p-8'>
            <div className='flex items-center mb-3'>
              <div className='bg-green-500 text-white rounded-full'>
              <svg width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
    fill="currentColor"
    />
</svg>
              </div>
             <h2 className='text-gray-900 text-lg font-bold ml-2'>タイトル</h2>
            </div>
             <div>
                  <Link to='/cosplay' className='flex mt-3 text-green-500 items-center font-bold'>詳細
                  <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                        />
                        </svg>  
                  </Link>
             </div>
          </div>
        </div>
        <div className='md:w-1/3 p-4'>
          <div className='bg-gray-200 rounded-lg p-8'>
            <div className='flex items-center mb-3'>
              <div className='bg-green-500 text-white rounded-full'>
              <svg width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
    fill="currentColor"
    />
</svg>
              </div>
             <h2 className='text-gray-900 text-lg font-bold ml-2'>タイトル</h2>
            </div>
             <div>
                  <Link to='/awake' className='flex mt-3 text-green-500 items-center font-bold'>詳細
                  <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                        />
                        </svg>  
                  </Link>
             </div>
          </div>
        </div>
      </div>
    </div>
   </section>

   <section className='text-gray-700 border-t border-gray-200 bg-white py-6 sm:py-8 lg:py-12 bg-h-screen w-full bg-gradient-to-br
  from-violet-300 via-blue-100 to-orange-100'>
    <div className='container px-5 py-24 mx-auto flex flex-wrap'>
      <div className='mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center'>
        <img src='./img/4794985515903460063.d142979e8592baa951b451dcf957498f.22091503.JPG' alt='' className='rounded md:w-1/2 lg:max-w-lg w-5/6'/>
      </div>
       <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2 '>
        <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left'>My Skills</h1>
        <div className='w-full'>
          <h2 className='font-bold text-blue-400'>プログラミングスキル</h2>
          <div className='shadow bg-green-100 mt-2 w-full'>
             <div className='bg-green-600 text-xs leading-none py-1 text-center  font-bold text-blue-200' style={{width: "25%" }}>25%</div>
          </div>
          <br />
          <h2 className='font-bold text-yellow-600'>柔軟性</h2>
          <div className='shadow bg-green-100 mt-2 w-full'>
             <div className='bg-green-600 text-xs leading-none py-1 text-center  font-bold text-yellow-200' style={{width: "75%" }}>75%</div>
          </div>
          <br />
          <h2 className='font-bold text-pink-400'>親切さ</h2>
          <div className='shadow bg-green-100 mt-2 w-full'>
             <div className='bg-green-600 text-xs leading-none py-1 text-center  font-bold text-pink-200' style={{width: "85%" }}>85%</div>
          </div>
          <br />
          <h2 className='font-bold text-red-500'>コミュニケーション</h2>
          <div className='shadow bg-green-100 mt-2 w-full'>
             <div className='bg-green-600 text-xs leading-none py-1 text-center text-white font-bold'   style={{width: "95%" }}>95%</div>
          </div>
        </div>
       </div>
    </div>

   </section>
                        </>
  )
}

export default Home
