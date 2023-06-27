import Link from "next/link";
import { getLimitedData } from "../../../utils";
import LimitButton from "../../../components/navbarcomponents/LimitButton";

const ProductsScreen = async ({ searchParams }) => {
  const products = await getLimitedData(10, searchParams.skip || 10);
  console.log("searchParams---->", searchParams);
  return (
    <div className="bg-slate-50">
      <div className="px-5 max-w-[1400px] m-auto">
        <div>ProductsScreen</div>
        <div>
          {products?.products?.map((item, index) => {
            return (
              <Link key={index} href={`/category/${item.category}/${item.id}`}>
                <div>
                  <div>{item.title}</div>
                </div>
              </Link>
            );
          })}
        </div>
        <div>
          <LimitButton pageNumber={(searchParams.skip || 10) / 10} />
        </div>
      </div>
    </div>
  );
};

export default ProductsScreen;
