import { TrashIcon } from "@heroicons/react/24/outline";
import {
  useDeleteBooksFromCartMutation,
  useGetCartQuery,
  useBuyBookMutation,
} from "store/userApi";
import { useBooks } from "hooks/useBooks";

const ShoppingCart = () => {
  const { data: cart = [] } = useGetCartQuery();
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

  return (
    <div className="container mx-auto">
      <h2 className="mt-6 text-center text-lg">Shopping Basket</h2>
      {cartBooks.map((book, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-between mx-5"
        >
          <div className="flex flex-col md:flex-row mt-10">
            <img src={book.image} width="150" alt={book.title} />
            <div className="flex flex-col ml-5 w-20">
              <h3 className="text-sm mt-6">{book.title}</h3>
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

          <div className="mt-10 flex flex-col text-sm ">
            <button onClick={() => handleRemoveItem(book._id)}>
              <TrashIcon className="mt-1 w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-between mx-5 my-6 border-t-2">
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
    </div>
  );
};

export default ShoppingCart;
