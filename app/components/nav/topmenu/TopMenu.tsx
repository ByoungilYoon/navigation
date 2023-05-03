import Container from "@/app/Container";
import { topMenu } from "../ItemList";

const TopMenu = () => {
  return (
    <div className="w-full border-b-[1px] py-2">
        <Container>
          <div className="flex gap-8 justify-end text-xs font-light">
            {topMenu.map((menu, index) => (
              <span key={index} className="cursor-pointer hover:underline">{menu.title}</span>
            ))}
          </div>
        </Container>
      </div>
  );
}
export default TopMenu;