import { toast } from "sonner";

export const handleComingSoonMsg = (feature?: string) => {
  toast.info(`The feature "${feature}" is coming soon! Stay tuned for updates.`);
}