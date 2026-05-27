import {
  Bone,
  PersonSimpleRun,
  Drop,
  HandHeart,
  Bandaids,
  AlignCenterVertical,
  Needle,
  House,
  PersonSimpleWalk,
} from "@phosphor-icons/react";
import { ReactNode } from "react";

export const SERVICE_ICONS: Record<string, ReactNode> = {
  "orthopedic-rehabilitation": <Bone size={22} weight="duotone" />,
  "sports-injury-rehabilitation": <PersonSimpleRun size={22} weight="duotone" />,
  "pelvic-floor-rehabilitation": <Drop size={22} weight="duotone" />,
  "manual-therapy": <HandHeart size={22} weight="duotone" />,
  "post-surgery-rehabilitation": <Bandaids size={22} weight="duotone" />,
  "back-neck-pain-treatment": <AlignCenterVertical size={22} weight="duotone" />,
  "dry-needling": <Needle size={22} weight="duotone" />,
  "home-based-care": <House size={22} weight="duotone" />,
  "mobility-strength-recovery": <PersonSimpleWalk size={22} weight="duotone" />,
};
