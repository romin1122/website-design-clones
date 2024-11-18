import { serif } from '@/app/ui/fonts';
import { FiLogIn, FiShoppingCart, FiUploadCloud } from 'react-icons/fi';

function Benefits() {
  return (
    <div className='flex flex-col gap-10 text-center w-full'>
      <div className='flex flex-col items-center gap-2'>
        <div
          className={`${serif.className} text-steadiaBlack text-3xl font-bold max-w-[650px]`}
        >
          All you have to do is make the product. Steadia takes care of the
          details for you.
        </div>
        <div className='max-w-[700px]'>
          Steadia lets you make your sales page, take payments, and give your
          customers access all in one place. Host and sell your products without
          needing to figure out a handful of new tools.
        </div>
      </div>
      <div className='flex gap-5'>
        <div className='flex-1 flex flex-col items-center gap-2'>
          <div className='rounded-full p-4 bg-steadiaTextFocus text-steadiaText w-fit'>
            <FiShoppingCart style={{ fontSize: '1.5em' }} />
          </div>
          <div
            className={`${serif.className} font-semibold text mt-2 text-steadiaBlack text-lg`}
          >
            Checkout and sales are handled for you
          </div>
          <div>
            You don't have to figure out a bunch of toold or website embeds.
            Just connect a payment provider and your Steadia site takes care of
            payments for you.
          </div>
        </div>

        <div className='flex-1 flex flex-col items-center gap-2'>
          <div className='rounded-full p-4 bg-steadiaTextFocus text-steadiaText w-fit'>
            <FiLogIn style={{ fontSize: '1.5em' }} />
          </div>
          <div
            className={`${serif.className} font-semibold text mt-2 text-steadiaBlack text-lg`}
          >
            Your customers log in, and your products are there for them
          </div>
          <div>
            Your Steadia site handles access to products for you. Everything is
            in one place. When your customers buy a product, they get a log in.
            After that, they can see all the products they've brought from you.
          </div>
        </div>

        <div className='flex-1 flex flex-col items-center gap-2'>
          <div className='rounded-full p-4 bg-steadiaTextFocus text-steadiaText w-fit'>
            <FiUploadCloud style={{ fontSize: '1.5em' }} />
          </div>
          <div
            className={`${serif.className} font-semibold text mt-2 text-steadiaBlack text-lg`}
          >
            Upload your product. Make your sales page. Done
          </div>
          <div>
            You could sell a digital product by this afternoon. Steadia handles
            hosting, sales pages, checkout, and delivery. All you need is
            something to sell.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
