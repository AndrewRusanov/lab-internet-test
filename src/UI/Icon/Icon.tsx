import { FC, lazy, PropsWithChildren, Suspense } from "react";
import Loader from "UI/Loader/Loader";

const Waiting = lazy(() => import("./components/Waiting"));
const DeliveryTruck = lazy(() => import("./components/DeliveryTruck"));
const Secure = lazy(() => import("./components/Secure"));
const MoneyBags = lazy(() => import("./components/MoneyBags"));
const Plus = lazy(() => import("./components/Plus"));
const Cross = lazy(() => import("./components/Cross"));
const CheckMark = lazy(() => import("./components/CheckMark"));

const IconWrapper: FC<PropsWithChildren<unknown>> = (props) => (
  <Suspense fallback={<Loader isSmall />}>{props.children}</Suspense>
);

const Icon = {
  Waiting: () => (
    <IconWrapper>
      <Waiting />
    </IconWrapper>
  ),
  DeliveryTruck: () => (
    <IconWrapper>
      <DeliveryTruck />
    </IconWrapper>
  ),
  Secure: () => (
    <IconWrapper>
      <Secure />
    </IconWrapper>
  ),
  MoneyBags: () => (
    <IconWrapper>
      <MoneyBags />
    </IconWrapper>
  ),
  Plus: () => (
    <IconWrapper>
      <Plus />
    </IconWrapper>
  ),
  Cross: () => (
    <IconWrapper>
      <Cross />
    </IconWrapper>
  ),
  CheckMark: () => (
    <IconWrapper>
      <CheckMark />
    </IconWrapper>
  ),
};

export default Icon;
