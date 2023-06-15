type Props = {
  active: string;
};

// Based on https://fresh.deno.dev/components/#Header

export default function Header({ active }: Props) {
  const menus = [
    { name: "Uthyrning", href: "/" },
    { name: "Bildgalleri", href: "/gallery" },
  ];

  return (
    <div class="bg-white w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4 border-1 border-black rounded-md">
      <div class="flex items-center flex-1">
        <div class="text-2xl  ml-1 font-bold">
          Örsjötorpet <span class="text-lg">| Värmland</span>
        </div>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
