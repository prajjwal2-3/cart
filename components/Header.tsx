import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { ModeToggle } from './DarkModeToggle';
import CartCount from './CartCount';

interface HeaderProps {
  cartItemCount: number;
}

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
       
        <div className="mr-4 hidden md:flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">ShopName</span>
          </a>
        </div>

        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              Menu
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[200px]">
            <DropdownMenuItem>
              <a href="#">Home</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#">Products</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#">About</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#">Contact</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <nav className="items-center space-x-6 text-sm font-medium hidden md:flex">
          <a href="#" className="transition-colors hover:text-foreground/80">Home</a>
          <a href="#" className="transition-colors hover:text-foreground/80">Products</a>
          <a href="#" className="transition-colors hover:text-foreground/80">About</a>
          <a href="#" className="transition-colors hover:text-foreground/80">Contact</a>
        </nav>

        
        <div className="flex-1 md:flex hidden items-center justify-end space-x-4">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Input
              type="search"
              placeholder="Search products..."
              className="w-[200px] md:w-[300px]"
            />
          </div>
        </div>

       
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center  gap-4 ">
            <CartCount/>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;