import { CarProps, FilterProps } from "@types";

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDayUSD = 50;
  const mileageFactorUSD = 0.1;
  const ageFactorUSD = 0.05;

  const mileageRateUSD = city_mpg * mileageFactorUSD;
  const ageRateUSD = (new Date().getFullYear() - year) * ageFactorUSD;

  const rentalRatePerDayUSD = basePricePerDayUSD + mileageRateUSD + ageRateUSD;

  const exchangeRateUSDToKSH = 140;
  const rentalRatePerDayKSH = rentalRatePerDayUSD * exchangeRateUSDToKSH;

  return rentalRatePerDayKSH.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  const newSearchParams = new URLSearchParams(window.location.search);
  newSearchParams.delete(type.toLowerCase());
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;
  return newPathname;
};

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  const headers: HeadersInit = {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_IMAGIN_API_KEY_X_RapidAPI_Key || '',
    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_IMAGIN_API_KEY_X_RapidAPI_Host || '',
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
}
