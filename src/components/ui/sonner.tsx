import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"
import type { ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      toastOptions={{
        style: {
          background: 'white',
          color: 'rgb(15 23 42)', // slate-900
          border: '1px solid rgb(226 232 240)', // slate-200
        },
        className: 'dark:bg-neutral-950 dark:text-white dark:border-neutral-800',
      }}
      {...props}
    />
  )
}

export { Toaster }
