import { TrashIcon } from "@heroicons/react/24/outline";
import {
  useDeleteBooksFromCartMutation,
  useGetCartQuery,
  useBuyBookMutation,
} from "store/userApi";
import { useBooks } from "hooks/useBooks";
import { useGetBooksUserQuery } from "store/userApi";
import { useState, useEffect } from "react";


const ShoppingCart = () => {
  const { data: cart = [], isLoading } = useGetCartQuery();
  const [removeItem] = useDeleteBooksFromCartMutation();
  const [buyBooks] = useBuyBookMutation ();
  const cartBooks = useBooks(cart);

  const handleRemoveItem = (bookId) => {
    removeItem(bookId);
  };

  const handleBuyBooks = () => {
    buyBooks();
  };

  const totalPrice = cartBooks.reduce(
    (total, book) => total + parseFloat(book.price),
    0
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (!cartBooks.length) {
      setMessage("Your cart is empty");
    }
  }, [isLoading]);

  return (
    <div className="container mx-auto">
      <h2 className="mt-6 text-center text-lg">Shopping Basket</h2>
      <div className="text-center my-12">{message}</div>
      {cartBooks.map((book, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-between mx-5 border-t-2"
        >
         
          <div className="flex flex-col md:flex-row my-5">
            <img src={book.image} width="150" alt={book.title} />
            <div className="flex flex-col ml-5 w-20">
              <h3 className="text-sm mt-5">{book.title}</h3>
              <p className="mt-3 text-xs">by {book.author}</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col text-sm">
            <h3>Quantity</h3>
            <div className="flex items-center justify-center">
              <p className="text-sm mx-3">1</p>
            </div>
          </div>
          <div className="mt-10 flex flex-col text-sm ">
            <h3>Price</h3>
            <p className="text-center text-sm">{book.price} €</p>
          </div>

          <div className="mt-10 flex flex-col text-sm">
            <button onClick={() => handleRemoveItem(book._id)}>
              <TrashIcon className="mt-1 w-4 h-4" />
            </button>
          </div>
          
        </div>
      ))}
      <div className="flex justify-between mx-5 mb-6 border-t-2">
        <h3 className="mt-3">Total</h3>
        <p className="mt-3">{totalPrice} €</p>
      </div>
      <div className="flex justify-end mx-5 mt-5 md:mt-0">
        <button className="border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground rounded-md px-4 py-2 mr-2 md:mr-5">
          CONTINUE SHOPPING
        </button>
        <button
          onClick={handleBuyBooks}
          className="bg-green-300 rounded-md px-4 dark:text-black"
        >
          CHECKOUT
        </button>
      </div>

      {/* <div class="font-[sans-serif]">
        <div class="grid lg:grid-cols-3 gap-12 p-6">
          <div class="lg:col-span-2 bg-white divide-y">
            <div class="grid md:grid-cols-4 items-center gap-8 py-6">
              <div class="md:col-span-2 flex items-center gap-6">
                <div class="w-32 h-22 shrink-0 shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] p-4">
                  <img
                    src="https://readymadeui.com/images/product11.webp"
                    class="w-full h-full object-contain rounded-md"
                  />
                </div>
                <div>
                  <h3 class="text-lg font-extrabold text-[#333]">
                    VelvetGlide Boots
                  </h3>
                  <h6 class="text-md text-gray-500 mt-2">
                    Title : <strong class="ml-2">Black</strong>
                  </h6>
                  <h6 class="text-md text-gray-500 mt-2">
                    Author : <strong class="ml-2">Black</strong>
                  </h6>
                </div>
              </div>
              <div class="flex">
                <button
                  type="button"
                  class="bg-transparent py-2 font-semibold text-[#333]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-3 fill-current"
                    viewBox="0 0 124 124"
                  >
                    <path
                      d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  class="bg-transparent mx-4 px-4 py-2 font-semibold text-[#333] text-md shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)]"
                >
                  1
                </button>
                <button
                  type="button"
                  class="bg-transparent py-2 font-semibold text-[#333]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-3 fill-current"
                    viewBox="0 0 42 42"
                  >
                    <path
                      d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="flex items-center">
                <h4 class="text-lg font-bold text-[#333]">$20.00</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3 cursor-pointer shrink-0 fill-[#333] hover:fill-red-500 ml-auto"
                  viewBox="0 0 320.591 320.591"
                >
                  <path
                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="grid md:grid-cols-4 items-center gap-8 py-6">
              <div class="md:col-span-2 flex items-center gap-6">
                <div class="w-32 h-22 shrink-0 shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] p-4">
                  <img
                    src="https://readymadeui.com/images/product14.webp"
                    class="w-full h-full object-contain rounded-md"
                  />
                </div>
                <div>
                  <h3 class="text-lg font-extrabold text-[#333]">
                    EchoElegance
                  </h3>
                  <h6 class="text-md text-gray-500 mt-2">
                    Color: <strong class="ml-2">Black/White</strong>
                  </h6>
                </div>
              </div>
              <div class="flex">
                <button
                  type="button"
                  class="bg-transparent py-2 font-semibold text-[#333]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-3 fill-current"
                    viewBox="0 0 124 124"
                  >
                    <path
                      d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  class="bg-transparent mx-4 px-4 py-2 font-semibold text-[#333] text-md shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)]"
                >
                  1
                </button>
                <button
                  type="button"
                  class="bg-transparent py-2 font-semibold text-[#333]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-3 fill-current"
                    viewBox="0 0 42 42"
                  >
                    <path
                      d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="flex items-center">
                <h4 class="text-lg font-bold text-[#333]">$24.00</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3 cursor-pointer shrink-0 fill-[#333] hover:fill-red-500 ml-auto"
                  viewBox="0 0 320.591 320.591"
                >
                  <path
                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="grid md:grid-cols-4 items-center gap-8 py-6">
              <div class="md:col-span-2 flex items-center gap-6">
                <div class="w-32 h-22 shrink-0 shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] p-4">
                  <img
                    src="https://readymadeui.com/images/product13.webp"
                    class="w-full h-full object-contain rounded-md"
                  />
                </div>
                <div>
                  <h3 class="text-lg font-extrabold text-[#333]">ZenithGlow</h3>
                  <h6 class="text-md text-gray-500 mt-2">
                    Color: <strong class="ml-2">Black</strong>
                  </h6>
                </div>
              </div>
              <div class="flex">
                <button
                  type="button"
                  class="bg-transparent py-2 font-semibold text-[#333]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-3 fill-current"
                    viewBox="0 0 124 124"
                  >
                    <path
                      d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  class="bg-transparent mx-4 px-4 py-2 font-semibold text-[#333] text-md shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)]"
                >
                  1
                </button>
                <button
                  type="button"
                  class="bg-transparent py-2 font-semibold text-[#333]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-3 fill-current"
                    viewBox="0 0 42 42"
                  >
                    <path
                      d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="flex items-center">
                <h4 class="text-lg font-bold text-[#333]">$22.00</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3 cursor-pointer shrink-0 fill-[#333] hover:fill-red-500 ml-auto"
                  viewBox="0 0 320.591 320.591"
                >
                  <path
                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="bg-gray-100 rounded p-6">
            <h3 class="text-xl font-extrabold text-[#333] border-b pb-4">
              Order Summary
            </h3>
            <ul class="text-[#333] divide-y mt-6">
              <li class="flex flex-wrap gap-4 text-md py-4">
                Subtotal <span class="ml-auto font-bold">$46.00</span>
              </li>
              <li class="flex flex-wrap gap-4 text-md py-4 font-bold">
                Total <span class="ml-auto">$54.00</span>
              </li>
            </ul>
            <button
              type="button"
              class="mt-6 text-md px-6 py-2.5 w-full bg-green-300 hover:bg-blue-700 text-black rounded"
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ShoppingCart;
