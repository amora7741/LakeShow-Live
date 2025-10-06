'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import PulsingCircle from './PulsingCircle';
import { LoaderCircle, SearchIcon } from 'lucide-react';
import { useState } from 'react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);

    const encodedQuery = encodeURIComponent(searchQuery.trim());

    window.location.href = `/matches?q=${encodedQuery}`; //ugly
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className='absolute bottom-8 right-8 z-30 hover:scale-105 active:scale-90 cursor-pointer transition-all rounded-full'>
          <PulsingCircle />
        </button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-2xl bg-transparent backdrop-blur-2xl border-0 text-white'>
        <form className='grid gap-3' onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className='text-3xl'>
              What would you like to watch?
            </DialogTitle>
            <DialogDescription className='sr-only'>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <Label className='sr-only' htmlFor='team-input'>
            Input what you want to watch.
          </Label>
          <div className='relative mt-2'>
            <SearchIcon className='absolute size-6 top-1' />
            <Input
              name='team-input'
              id='team-input'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='!text-xl pl-10 pb-2 mb-8 border-0 border-b border-b-white/30 rounded-none focus-visible:border-b-white focus-visible:ring-0'
              placeholder='Los Angeles Lakers'
            />
          </div>
          <DialogFooter>
            <button
              className='w-full flex items-center justify-center p-2 px-4 sm:w-20 text-white cursor-pointer bg-purple-700/30 font-semibold rounded-lg'
              type='submit'
            >
              {loading ? <LoaderCircle className='animate-spin' /> : 'Search'}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Search;
