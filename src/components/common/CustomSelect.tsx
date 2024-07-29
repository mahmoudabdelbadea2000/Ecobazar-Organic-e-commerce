import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface IProps {
  placeHolder: string;
  items: { place: string; lang: string }[];
  handleClick?: (e: string) => void;
}

export function CustomSelect({ placeHolder, items, handleClick }: IProps) {
  return (
    <Select onValueChange={handleClick}>
      <SelectTrigger className="h-fit md:w-[70px]">
        <SelectValue placeholder={placeHolder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map((item, idx) => (
            <SelectItem key={idx} value={item.lang}>
              {item.place}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
