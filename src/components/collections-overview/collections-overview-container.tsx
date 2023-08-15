import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import CollectionsOverview from "./collections-overview.component";

import Spinner from "../spinner/spinner.component";

export default function CollectionsOverviewContainer(): ReactElement {
  const isLoading: boolean = useSelector(selectIsCollectionFetching);

  if (isLoading) {
    return <Spinner />;
  }

  return <CollectionsOverview />;
}
