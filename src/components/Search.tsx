import {
  Dialog,
  DialogClose,
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
import { SearchIcon } from 'lucide-react';

export function Search() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <button className='absolute bottom-8 right-8 z-30 hover:scale-105 active:scale-90 cursor-pointer transition-all rounded-full'>
            <PulsingCircle />
          </button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-3xl bg-transparent backdrop-blur-2xl border-0 text-white'>
          <DialogHeader>
            <DialogTitle className='text-3xl'>
              What would you like to watch?
            </DialogTitle>
            <DialogDescription className='sr-only'>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-3'>
            <Label className='sr-only' htmlFor='team-input'>
              Input what you want to watch.
            </Label>
            <div className='relative'>
              <SearchIcon className='absolute size-6 top-1' />
              <Input
                name='team-input'
                id='team-input'
                className='!text-xl pl-10 pb-2 border-0 border-b border-b-white/30 rounded-none focus-visible:border-b-white focus-visible:ring-0'
                placeholder='Los Angeles Lakers'
              />
            </div>
          </div>
          <DialogFooter>
            <button
              className='mt-8 p-2 px-4 text-white cursor-pointer bg-purple-700/30 font-semibold rounded-lg'
              type='submit'
            >
              Search
            </button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
