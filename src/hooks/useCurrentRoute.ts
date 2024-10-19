import { usePathname } from 'next/navigation';

export const useCurrentRoute = () => {
  const pathname = usePathname();
  return pathname;
};
