import styled from "styled-components";
import { Text } from "./Text";
import { useEffect, useRef, useState } from "react";
import { BurgerButton } from "./BurgerButton";
import { SideMenu } from "./SideMenu";

export type NavItem = {
    label: string;
    path: string;
}

interface NavbarProps {
    items: NavItem[];
    activePath?: string;
    onItemClick?: (path: string) => void;
    avatarSrc: string;
    name: string;
    title: string;
}

const NavItem = styled.button<{ active: boolean}>(({ theme: { space, colors }, active }) => ({
    position: 'relative',
    border: 'none',
    cursor: 'pointer',
    appearance: 'none',
    background: 'transparent',
    padding: `${space.md} 0px`,

    '&::after': {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: '-6px',
        width: active ? '100%' : '0%',
        height: '2px',
        background: colors.accent,
        borderRadius: '2px',
        transform: active ? 'scaleX(1)' : 'scaleX(0.6)',
        opacity: active ? 1 : 0,

        transformOrigin: 'center',
        transition: 'transform 0.5s ease, opacity 0.2s ease',
    }
}))

const Nav = styled.nav({
    position: 'sticky',
    top: 0,
    display: 'flex',
    flexDirection: 'row',
    padding: '0px 16px',
    gap: '32px',
    "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: "-6px",
        width: "100%",
        height: "2px",
        background: "linear-gradient(to right, transparent 0%, rgba(164, 163, 175, 0.2) 20%, rgba(164, 163, 175, 0.5) 50%, rgba(164, 163, 175, 0.2) 95%, transparent 100%)"
     }
})

export const Navbar = ({ items, activePath, onItemClick, avatarSrc, name, title }: NavbarProps) => {
    const navRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const [visibleCount, setVisibleCount] = useState(items.length);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const el = navRef.current;
        if (!el) return;

        const calculate = () => {
            const containerWidth = el.clientWidth;
            const style = window.getComputedStyle(el);
            const gap = parseInt(style.gap || '0', 10);

            let total = 0;
            let count = 0;

            for (let i = 0; i < items.length; i++) {
                const itemEl = itemRefs.current[i];
                if (!itemEl) continue;

                const width = itemEl.offsetWidth;
                const nextTotal = total + width + (i > 0 ? gap : 0);

                if (nextTotal > containerWidth - 60) {
                    break;
                }

                total = nextTotal;
                count++;
            }

            console.log(count);

            setVisibleCount(count);
        };

        calculate();

        const observer = new ResizeObserver(calculate);
        observer.observe(el);
        window.addEventListener('resize', calculate);

        return () => { 
            observer.disconnect();
            window.removeEventListener('resize', calculate);
        };

        
    }, [items]);

    const visibleItems = items.slice(0, visibleCount);
    const hiddenItems = items.slice(visibleCount);

    return <Nav ref={navRef}>
        {visibleItems.map((item, index) => {
            const isItemActive = activePath === item.path;
            return <NavItem
                key={item.path}
                ref={(el) => {
                    itemRefs.current[index] = el;
                }}
                active={activePath === item.path}
                onClick={() => onItemClick?.(item.path)}
            >
            <Text fontColor={isItemActive ? 'textPrimary' : 'textSecondary'} fontWeight={isItemActive && 600} fontSize="lg">{item.label}</Text>

            </NavItem>
        })}

        {hiddenItems.length > 0 && (
            <BurgerButton ml="auto" open={isOpen} onClick={() => setIsOpen(true)}/>
        )}
        <SideMenu name={name} title={title} avatarSrc={avatarSrc} isOpen={isOpen} onClose={() => setIsOpen(false)} items={hiddenItems}/>
    </Nav>
}