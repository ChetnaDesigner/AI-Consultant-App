import { BotIcon } from "./icons";

function ChatBar() {
  return (
    <div className="sticky bottom-0 border-t border-border bg-surface px-6 py-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
            You
          </span>
          <div>
            <p className="text-sm text-heading">
              I want to build a food delivery app where users can order food,
              track delivery, make payments, and restaurants can manage menus.
            </p>
            <p className="mt-1 text-xs text-muted">Just now</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-600/20 text-indigo-400">
            <BotIcon size={18} />
          </span>
          <div>
            <p className="text-sm font-medium text-heading">AI is thinking...</p>
            <div className="mt-1 flex gap-1">
              <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-500 [animation-delay:0ms]" />
              <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-500 [animation-delay:150ms]" />
              <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-500 [animation-delay:300ms]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBar;
