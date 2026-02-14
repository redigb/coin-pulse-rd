
import DataTable from "@/components/DataTable";
import CoinOverview from "@/components/home/CoinOverView";
import TrendingCoins from "@/components/home/TrendingCoins";
import { fetcher } from "@/lib/coingecko.actions";
import { cn, formatCurrency } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { CoinOverviewFallback, TrendingCoinsFallback } from "@/components/fallback";



const Page = async () => {

  return <main className="main-container">

    <section className="home-grid">

      <Suspense fallback={<CoinOverviewFallback />}>
        <CoinOverview />
      </Suspense>

      <Suspense fallback={<TrendingCoinsFallback rows={4} />}>
        <TrendingCoins />
      </Suspense>
    </section>

    <section className="w-full mt-7 space-y-4">
      <p>Categories</p>

    </section>
  </main>;
}

export default Page;