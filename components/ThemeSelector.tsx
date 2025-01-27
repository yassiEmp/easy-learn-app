import { Button } from "@/components/ui/button"

interface ThemeSelectorProps {
  onThemeSelect: (theme: number,themeName: string) => void;
}

const themes = [
  { id: 1, name: "Thème 1" },
  { id: 2, name: "Thème 2" },
  { id: 3, name: "Thème 3" },
  { id: 4, name: "Thème 4" },
  { id: 5, name: "Thème 5" },
  { id: 6, name: "Thème 6" },
  { id: 7, name: "Thème 7" },
  { id: 8, name: "Formules" },
  { id: 9, name: "math" },
  { id: 10, name: "OSI" },
];

export default function ThemeSelector({ onThemeSelect }: ThemeSelectorProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Choisissez un thème</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {themes.map((theme) => (
          <Button
            key={theme.id}
            onClick={() => {onThemeSelect(theme.id,theme.name) } }
            className="w-full text-lg py-4"
          >
            {theme.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

