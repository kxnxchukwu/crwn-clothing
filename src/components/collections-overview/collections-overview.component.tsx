import { ReactElement } from "react";
import { useSelector } from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionsForPreview } from "../../features/shop-slice";
import { CollectionsOverviewContainer } from "./collections-overview.styles";

export default function CollectionsOverview(): ReactElement {
  const collections = useSelector(selectCollectionsForPreview);
  console.log(collections);
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
}
