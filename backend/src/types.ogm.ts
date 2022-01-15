import { SelectionSetNode, DocumentNode } from "graphql";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date and time, represented as an ISO-8601 string */
  DateTime: any;
};

export type Query = {
  __typename?: "Query";
  users: Array<User>;
  usersCount: Scalars["Int"];
  usersAggregate: UserAggregateSelection;
  messages: Array<Message>;
  messagesCount: Scalars["Int"];
  messagesAggregate: MessageAggregateSelection;
};

export type QueryUsersArgs = {
  where?: Maybe<UserWhere>;
  options?: Maybe<UserOptions>;
};

export type QueryUsersCountArgs = {
  where?: Maybe<UserWhere>;
};

export type QueryUsersAggregateArgs = {
  where?: Maybe<UserWhere>;
};

export type QueryMessagesArgs = {
  where?: Maybe<MessageWhere>;
  options?: Maybe<MessageOptions>;
};

export type QueryMessagesCountArgs = {
  where?: Maybe<MessageWhere>;
};

export type QueryMessagesAggregateArgs = {
  where?: Maybe<MessageWhere>;
};

export type Mutation = {
  __typename?: "Mutation";
  createUsers: CreateUsersMutationResponse;
  deleteUsers: DeleteInfo;
  updateUsers: UpdateUsersMutationResponse;
  createMessages: CreateMessagesMutationResponse;
  deleteMessages: DeleteInfo;
  updateMessages: UpdateMessagesMutationResponse;
};

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};

export type MutationDeleteUsersArgs = {
  where?: Maybe<UserWhere>;
  delete?: Maybe<UserDeleteInput>;
};

export type MutationUpdateUsersArgs = {
  where?: Maybe<UserWhere>;
  update?: Maybe<UserUpdateInput>;
  connect?: Maybe<UserConnectInput>;
  disconnect?: Maybe<UserDisconnectInput>;
  create?: Maybe<UserRelationInput>;
  delete?: Maybe<UserDeleteInput>;
  connectOrCreate?: Maybe<UserConnectOrCreateInput>;
};

export type MutationCreateMessagesArgs = {
  input: Array<MessageCreateInput>;
};

export type MutationDeleteMessagesArgs = {
  where?: Maybe<MessageWhere>;
  delete?: Maybe<MessageDeleteInput>;
};

export type MutationUpdateMessagesArgs = {
  where?: Maybe<MessageWhere>;
  update?: Maybe<MessageUpdateInput>;
  connect?: Maybe<MessageConnectInput>;
  disconnect?: Maybe<MessageDisconnectInput>;
  create?: Maybe<MessageRelationInput>;
  delete?: Maybe<MessageDeleteInput>;
  connectOrCreate?: Maybe<MessageConnectOrCreateInput>;
};

export type Subscription = {
  __typename?: "Subscription";
  messages?: Maybe<Array<Message>>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type Follows = {
  user: Scalars["ID"];
  createdAt: Scalars["DateTime"];
};

export type CreateInfo = {
  __typename?: "CreateInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesCreated: Scalars["Int"];
  relationshipsCreated: Scalars["Int"];
};

export type CreateMessagesMutationResponse = {
  __typename?: "CreateMessagesMutationResponse";
  info: CreateInfo;
  messages: Array<Message>;
};

export type CreateUsersMutationResponse = {
  __typename?: "CreateUsersMutationResponse";
  info: CreateInfo;
  users: Array<User>;
};

export type DateTimeAggregateSelection = {
  __typename?: "DateTimeAggregateSelection";
  min?: Maybe<Scalars["DateTime"]>;
  max?: Maybe<Scalars["DateTime"]>;
};

export type DeleteInfo = {
  __typename?: "DeleteInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesDeleted: Scalars["Int"];
  relationshipsDeleted: Scalars["Int"];
};

export type IdAggregateSelection = {
  __typename?: "IDAggregateSelection";
  shortest?: Maybe<Scalars["ID"]>;
  longest?: Maybe<Scalars["ID"]>;
};

export type Message = {
  __typename?: "Message";
  id: Scalars["ID"];
  content: Scalars["String"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  author: User;
  authorAggregate?: Maybe<MessageUserAuthorAggregationSelection>;
  parents?: Maybe<Array<Message>>;
  parentsAggregate?: Maybe<MessageMessageParentsAggregationSelection>;
  children?: Maybe<Array<Message>>;
  childrenAggregate?: Maybe<MessageMessageChildrenAggregationSelection>;
  authorConnection: MessageAuthorConnection;
  parentsConnection: MessageParentsConnection;
  childrenConnection: MessageChildrenConnection;
};

export type MessageAuthorArgs = {
  where?: Maybe<UserWhere>;
  options?: Maybe<UserOptions>;
};

export type MessageAuthorAggregateArgs = {
  where?: Maybe<UserWhere>;
};

export type MessageParentsArgs = {
  where?: Maybe<MessageWhere>;
  options?: Maybe<MessageOptions>;
};

export type MessageParentsAggregateArgs = {
  where?: Maybe<MessageWhere>;
};

export type MessageChildrenArgs = {
  where?: Maybe<MessageWhere>;
  options?: Maybe<MessageOptions>;
};

export type MessageChildrenAggregateArgs = {
  where?: Maybe<MessageWhere>;
};

export type MessageAuthorConnectionArgs = {
  where?: Maybe<MessageAuthorConnectionWhere>;
  sort?: Maybe<Array<MessageAuthorConnectionSort>>;
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
};

export type MessageParentsConnectionArgs = {
  where?: Maybe<MessageParentsConnectionWhere>;
  sort?: Maybe<Array<MessageParentsConnectionSort>>;
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
};

export type MessageChildrenConnectionArgs = {
  where?: Maybe<MessageChildrenConnectionWhere>;
  sort?: Maybe<Array<MessageChildrenConnectionSort>>;
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
};

export type MessageAggregateSelection = {
  __typename?: "MessageAggregateSelection";
  count: Scalars["Int"];
  id: IdAggregateSelection;
  content: StringAggregateSelection;
  createdAt: DateTimeAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type MessageAuthorConnection = {
  __typename?: "MessageAuthorConnection";
  edges: Array<MessageAuthorRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type MessageAuthorRelationship = {
  __typename?: "MessageAuthorRelationship";
  cursor: Scalars["String"];
  node: User;
};

export type MessageChildrenConnection = {
  __typename?: "MessageChildrenConnection";
  edges: Array<MessageChildrenRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type MessageChildrenRelationship = Follows & {
  __typename?: "MessageChildrenRelationship";
  cursor: Scalars["String"];
  node: Message;
  user: Scalars["ID"];
  createdAt: Scalars["DateTime"];
};

export type MessageMessageChildrenAggregationSelection = {
  __typename?: "MessageMessageChildrenAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<MessageMessageChildrenNodeAggregateSelection>;
  edge?: Maybe<MessageMessageChildrenEdgeAggregateSelection>;
};

export type MessageMessageChildrenEdgeAggregateSelection = {
  __typename?: "MessageMessageChildrenEdgeAggregateSelection";
  user: IdAggregateSelection;
  createdAt: DateTimeAggregateSelection;
};

export type MessageMessageChildrenNodeAggregateSelection = {
  __typename?: "MessageMessageChildrenNodeAggregateSelection";
  id: IdAggregateSelection;
  content: StringAggregateSelection;
  createdAt: DateTimeAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type MessageMessageParentsAggregationSelection = {
  __typename?: "MessageMessageParentsAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<MessageMessageParentsNodeAggregateSelection>;
  edge?: Maybe<MessageMessageParentsEdgeAggregateSelection>;
};

export type MessageMessageParentsEdgeAggregateSelection = {
  __typename?: "MessageMessageParentsEdgeAggregateSelection";
  user: IdAggregateSelection;
  createdAt: DateTimeAggregateSelection;
};

export type MessageMessageParentsNodeAggregateSelection = {
  __typename?: "MessageMessageParentsNodeAggregateSelection";
  id: IdAggregateSelection;
  content: StringAggregateSelection;
  createdAt: DateTimeAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type MessageParentsConnection = {
  __typename?: "MessageParentsConnection";
  edges: Array<MessageParentsRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type MessageParentsRelationship = Follows & {
  __typename?: "MessageParentsRelationship";
  cursor: Scalars["String"];
  node: Message;
  user: Scalars["ID"];
  createdAt: Scalars["DateTime"];
};

export type MessageUserAuthorAggregationSelection = {
  __typename?: "MessageUserAuthorAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<MessageUserAuthorNodeAggregateSelection>;
};

export type MessageUserAuthorNodeAggregateSelection = {
  __typename?: "MessageUserAuthorNodeAggregateSelection";
  id: IdAggregateSelection;
  createdAt: DateTimeAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
  endCursor?: Maybe<Scalars["String"]>;
};

export type StringAggregateSelection = {
  __typename?: "StringAggregateSelection";
  shortest?: Maybe<Scalars["String"]>;
  longest?: Maybe<Scalars["String"]>;
};

export type UpdateInfo = {
  __typename?: "UpdateInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesCreated: Scalars["Int"];
  nodesDeleted: Scalars["Int"];
  relationshipsCreated: Scalars["Int"];
  relationshipsDeleted: Scalars["Int"];
};

export type UpdateMessagesMutationResponse = {
  __typename?: "UpdateMessagesMutationResponse";
  info: UpdateInfo;
  messages: Array<Message>;
};

export type UpdateUsersMutationResponse = {
  __typename?: "UpdateUsersMutationResponse";
  info: UpdateInfo;
  users: Array<User>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  messages?: Maybe<Array<Message>>;
  messagesAggregate?: Maybe<UserMessageMessagesAggregationSelection>;
  messagesConnection: UserMessagesConnection;
};

export type UserMessagesArgs = {
  where?: Maybe<MessageWhere>;
  options?: Maybe<MessageOptions>;
};

export type UserMessagesAggregateArgs = {
  where?: Maybe<MessageWhere>;
};

export type UserMessagesConnectionArgs = {
  where?: Maybe<UserMessagesConnectionWhere>;
  sort?: Maybe<Array<UserMessagesConnectionSort>>;
  first?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
};

export type UserAggregateSelection = {
  __typename?: "UserAggregateSelection";
  count: Scalars["Int"];
  id: IdAggregateSelection;
  createdAt: DateTimeAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type UserMessageMessagesAggregationSelection = {
  __typename?: "UserMessageMessagesAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<UserMessageMessagesNodeAggregateSelection>;
};

export type UserMessageMessagesNodeAggregateSelection = {
  __typename?: "UserMessageMessagesNodeAggregateSelection";
  id: IdAggregateSelection;
  content: StringAggregateSelection;
  createdAt: DateTimeAggregateSelection;
  updatedAt: DateTimeAggregateSelection;
};

export type UserMessagesConnection = {
  __typename?: "UserMessagesConnection";
  edges: Array<UserMessagesRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type UserMessagesRelationship = {
  __typename?: "UserMessagesRelationship";
  cursor: Scalars["String"];
  node: Message;
};

export type FollowsSort = {
  user?: Maybe<SortDirection>;
  createdAt?: Maybe<SortDirection>;
};

export type FollowsWhere = {
  OR?: Maybe<Array<FollowsWhere>>;
  AND?: Maybe<Array<FollowsWhere>>;
  user?: Maybe<Scalars["ID"]>;
  user_NOT?: Maybe<Scalars["ID"]>;
  user_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  user_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  user_CONTAINS?: Maybe<Scalars["ID"]>;
  user_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  user_STARTS_WITH?: Maybe<Scalars["ID"]>;
  user_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  user_ENDS_WITH?: Maybe<Scalars["ID"]>;
  user_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_NOT?: Maybe<Scalars["DateTime"]>;
  createdAt_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  createdAt_NOT_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  createdAt_LT?: Maybe<Scalars["DateTime"]>;
  createdAt_LTE?: Maybe<Scalars["DateTime"]>;
  createdAt_GT?: Maybe<Scalars["DateTime"]>;
  createdAt_GTE?: Maybe<Scalars["DateTime"]>;
};

export type MessageAuthorAggregateInput = {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<MessageAuthorAggregateInput>>;
  OR?: Maybe<Array<MessageAuthorAggregateInput>>;
  node?: Maybe<MessageAuthorNodeAggregationWhereInput>;
};

export type MessageAuthorConnectFieldInput = {
  where?: Maybe<UserConnectWhere>;
  connect?: Maybe<UserConnectInput>;
};

export type MessageAuthorConnectionSort = {
  node?: Maybe<UserSort>;
};

export type MessageAuthorConnectionWhere = {
  AND?: Maybe<Array<MessageAuthorConnectionWhere>>;
  OR?: Maybe<Array<MessageAuthorConnectionWhere>>;
  node?: Maybe<UserWhere>;
  node_NOT?: Maybe<UserWhere>;
};

export type MessageAuthorConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: MessageAuthorConnectOrCreateFieldInputOnCreate;
};

export type MessageAuthorConnectOrCreateFieldInputOnCreate = {
  node: UserCreateInput;
};

export type MessageAuthorCreateFieldInput = {
  node: UserCreateInput;
};

export type MessageAuthorDeleteFieldInput = {
  where?: Maybe<MessageAuthorConnectionWhere>;
  delete?: Maybe<UserDeleteInput>;
};

export type MessageAuthorDisconnectFieldInput = {
  where?: Maybe<MessageAuthorConnectionWhere>;
  disconnect?: Maybe<UserDisconnectInput>;
};

export type MessageAuthorFieldInput = {
  create?: Maybe<MessageAuthorCreateFieldInput>;
  connect?: Maybe<MessageAuthorConnectFieldInput>;
  connectOrCreate?: Maybe<MessageAuthorConnectOrCreateFieldInput>;
};

export type MessageAuthorNodeAggregationWhereInput = {
  AND?: Maybe<Array<MessageAuthorNodeAggregationWhereInput>>;
  OR?: Maybe<Array<MessageAuthorNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  createdAt_EQUAL?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: Maybe<Scalars["DateTime"]>;
  createdAt_GT?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: Maybe<Scalars["DateTime"]>;
  createdAt_GTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: Maybe<Scalars["DateTime"]>;
  createdAt_LT?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: Maybe<Scalars["DateTime"]>;
  createdAt_LTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: Maybe<Scalars["DateTime"]>;
  updatedAt_EQUAL?: Maybe<Scalars["DateTime"]>;
  updatedAt_MIN_EQUAL?: Maybe<Scalars["DateTime"]>;
  updatedAt_MAX_EQUAL?: Maybe<Scalars["DateTime"]>;
  updatedAt_GT?: Maybe<Scalars["DateTime"]>;
  updatedAt_MIN_GT?: Maybe<Scalars["DateTime"]>;
  updatedAt_MAX_GT?: Maybe<Scalars["DateTime"]>;
  updatedAt_GTE?: Maybe<Scalars["DateTime"]>;
  updatedAt_MIN_GTE?: Maybe<Scalars["DateTime"]>;
  updatedAt_MAX_GTE?: Maybe<Scalars["DateTime"]>;
  updatedAt_LT?: Maybe<Scalars["DateTime"]>;
  updatedAt_MIN_LT?: Maybe<Scalars["DateTime"]>;
  updatedAt_MAX_LT?: Maybe<Scalars["DateTime"]>;
  updatedAt_LTE?: Maybe<Scalars["DateTime"]>;
  updatedAt_MIN_LTE?: Maybe<Scalars["DateTime"]>;
  updatedAt_MAX_LTE?: Maybe<Scalars["DateTime"]>;
};

export type MessageAuthorUpdateConnectionInput = {
  node?: Maybe<UserUpdateInput>;
};

export type MessageAuthorUpdateFieldInput = {
  where?: Maybe<MessageAuthorConnectionWhere>;
  update?: Maybe<MessageAuthorUpdateConnectionInput>;
  connect?: Maybe<MessageAuthorConnectFieldInput>;
  disconnect?: Maybe<MessageAuthorDisconnectFieldInput>;
  create?: Maybe<MessageAuthorCreateFieldInput>;
  delete?: Maybe<MessageAuthorDeleteFieldInput>;
  connectOrCreate?: Maybe<MessageAuthorConnectOrCreateFieldInput>;
};

export type MessageChildrenAggregateInput = {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<MessageChildrenAggregateInput>>;
  OR?: Maybe<Array<MessageChildrenAggregateInput>>;
  node?: Maybe<MessageChildrenNodeAggregationWhereInput>;
  edge?: Maybe<MessageChildrenEdgeAggregationWhereInput>;
};

export type MessageChildrenConnectFieldInput = {
  where?: Maybe<MessageConnectWhere>;
  connect?: Maybe<Array<MessageConnectInput>>;
};

export type MessageChildrenConnectionSort = {
  edge?: Maybe<FollowsSort>;
  node?: Maybe<MessageSort>;
};

export type MessageChildrenConnectionWhere = {
  AND?: Maybe<Array<MessageChildrenConnectionWhere>>;
  OR?: Maybe<Array<MessageChildrenConnectionWhere>>;
  edge?: Maybe<FollowsWhere>;
  edge_NOT?: Maybe<FollowsWhere>;
  node?: Maybe<MessageWhere>;
  node_NOT?: Maybe<MessageWhere>;
};

export type MessageChildrenConnectOrCreateFieldInput = {
  where: MessageConnectOrCreateWhere;
  onCreate: MessageChildrenConnectOrCreateFieldInputOnCreate;
};

export type MessageChildrenConnectOrCreateFieldInputOnCreate = {
  node: MessageCreateInput;
};

export type MessageChildrenCreateFieldInput = {
  node: MessageCreateInput;
};

export type MessageChildrenDeleteFieldInput = {
  where?: Maybe<MessageChildrenConnectionWhere>;
  delete?: Maybe<MessageDeleteInput>;
};

export type MessageChildrenDisconnectFieldInput = {
  where?: Maybe<MessageChildrenConnectionWhere>;
  disconnect?: Maybe<MessageDisconnectInput>;
};

export type MessageChildrenEdgeAggregationWhereInput = {
  AND?: Maybe<Array<MessageChildrenEdgeAggregationWhereInput>>;
  OR?: Maybe<Array<MessageChildrenEdgeAggregationWhereInput>>;
  user_EQUAL?: Maybe<Scalars["ID"]>;
  createdAt_EQUAL?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: Maybe<Scalars["DateTime"]>;
  createdAt_GT?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: Maybe<Scalars["DateTime"]>;
  createdAt_GTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: Maybe<Scalars["DateTime"]>;
  createdAt_LT?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: Maybe<Scalars["DateTime"]>;
  createdAt_LTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: Maybe<Scalars["DateTime"]>;
};

export type MessageChildrenFieldInput = {
  create?: Maybe<Array<MessageChildrenCreateFieldInput>>;
  connect?: Maybe<Array<MessageChildrenConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<MessageChildrenConnectOrCreateFieldInput>>;
};

export type MessageChildrenNodeAggregationWhereInput = {
  AND?: Maybe<Array<MessageChildrenNodeAggregationWhereInput>>;
  OR?: Maybe<Array<MessageChildrenNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  content_EQUAL?: Maybe<Scalars["String"]>;
  content_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  content_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  content_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  content_GT?: Maybe<Scalars["Int"]>;
  content_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  content_LONGEST_GT?: Maybe<Scalars["Int"]>;
  content_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  content_GTE?: Maybe<Scalars["Int"]>;
  content_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  content_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  content_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  content_LT?: Maybe<Scalars["Int"]>;
  content_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  content_LONGEST_LT?: Maybe<Scalars["Int"]>;
  content_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  content_LTE?: Maybe<Scalars["Int"]>;
  content_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  content_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  content_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  createdAt_EQUAL?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: Maybe<Scalars["DateTime"]>;
  createdAt_GT?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: Maybe<Scalars["DateTime"]>;
  createdAt_GTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: Maybe<Scalars["DateTime"]>;
  createdAt_LT?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: Maybe<Scalars["DateTime"]>;
  createdAt_LTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: Maybe<Scalars["DateTime"]>;
  updatedAt_EQUAL?: Maybe<Scalars["DateTime"]>;
  updatedAt_MIN_EQUAL?: Maybe<Scalars["DateTime"]>;
  updatedAt_MAX_EQUAL?: Maybe<Scalars["DateTime"]>;
  updatedAt_GT?: Maybe<Scalars["DateTime"]>;
  updatedAt_MIN_GT?: Maybe<Scalars["DateTime"]>;
  updatedAt_MAX_GT?: Maybe<Scalars["DateTime"]>;
  updatedAt_GTE?: Maybe<Scalars["DateTime"]>;
  updatedAt_MIN_GTE?: Maybe<Scalars["DateTime"]>;
  updatedAt_MAX_GTE?: Maybe<Scalars["DateTime"]>;
  updatedAt_LT?: Maybe<Scalars["DateTime"]>;
  updatedAt_MIN_LT?: Maybe<Scalars["DateTime"]>;
  updatedAt_MAX_LT?: Maybe<Scalars["DateTime"]>;
  updatedAt_LTE?: Maybe<Scalars["DateTime"]>;
  updatedAt_MIN_LTE?: Maybe<Scalars["DateTime"]>;
  updatedAt_MAX_LTE?: Maybe<Scalars["DateTime"]>;
};

export type MessageChildrenUpdateConnectionInput = {
  node?: Maybe<MessageUpdateInput>;
};

export type MessageChildrenUpdateFieldInput = {
  where?: Maybe<MessageChildrenConnectionWhere>;
  update?: Maybe<MessageChildrenUpdateConnectionInput>;
  connect?: Maybe<Array<MessageChildrenConnectFieldInput>>;
  disconnect?: Maybe<Array<MessageChildrenDisconnectFieldInput>>;
  create?: Maybe<Array<MessageChildrenCreateFieldInput>>;
  delete?: Maybe<Array<MessageChildrenDeleteFieldInput>>;
  connectOrCreate?: Maybe<Array<MessageChildrenConnectOrCreateFieldInput>>;
};

export type MessageConnectInput = {
  author?: Maybe<MessageAuthorConnectFieldInput>;
  parents?: Maybe<Array<MessageParentsConnectFieldInput>>;
  children?: Maybe<Array<MessageChildrenConnectFieldInput>>;
};

export type MessageConnectOrCreateInput = {
  author?: Maybe<MessageAuthorConnectOrCreateFieldInput>;
  parents?: Maybe<Array<MessageParentsConnectOrCreateFieldInput>>;
  children?: Maybe<Array<MessageChildrenConnectOrCreateFieldInput>>;
};

export type MessageConnectOrCreateWhere = {
  node: MessageUniqueWhere;
};

export type MessageConnectWhere = {
  node: MessageWhere;
};

export type MessageCreateInput = {
  content: Scalars["String"];
  author?: Maybe<MessageAuthorFieldInput>;
  parents?: Maybe<MessageParentsFieldInput>;
  children?: Maybe<MessageChildrenFieldInput>;
};

export type MessageDeleteInput = {
  author?: Maybe<MessageAuthorDeleteFieldInput>;
  parents?: Maybe<Array<MessageParentsDeleteFieldInput>>;
  children?: Maybe<Array<MessageChildrenDeleteFieldInput>>;
};

export type MessageDisconnectInput = {
  author?: Maybe<MessageAuthorDisconnectFieldInput>;
  parents?: Maybe<Array<MessageParentsDisconnectFieldInput>>;
  children?: Maybe<Array<MessageChildrenDisconnectFieldInput>>;
};

export type MessageOptions = {
  /** Specify one or more MessageSort objects to sort Messages by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<MessageSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type MessageParentsAggregateInput = {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<MessageParentsAggregateInput>>;
  OR?: Maybe<Array<MessageParentsAggregateInput>>;
  node?: Maybe<MessageParentsNodeAggregationWhereInput>;
  edge?: Maybe<MessageParentsEdgeAggregationWhereInput>;
};

export type MessageParentsConnectFieldInput = {
  where?: Maybe<MessageConnectWhere>;
  connect?: Maybe<Array<MessageConnectInput>>;
};

export type MessageParentsConnectionSort = {
  edge?: Maybe<FollowsSort>;
  node?: Maybe<MessageSort>;
};

export type MessageParentsConnectionWhere = {
  AND?: Maybe<Array<MessageParentsConnectionWhere>>;
  OR?: Maybe<Array<MessageParentsConnectionWhere>>;
  edge?: Maybe<FollowsWhere>;
  edge_NOT?: Maybe<FollowsWhere>;
  node?: Maybe<MessageWhere>;
  node_NOT?: Maybe<MessageWhere>;
};

export type MessageParentsConnectOrCreateFieldInput = {
  where: MessageConnectOrCreateWhere;
  onCreate: MessageParentsConnectOrCreateFieldInputOnCreate;
};

export type MessageParentsConnectOrCreateFieldInputOnCreate = {
  node: MessageCreateInput;
};

export type MessageParentsCreateFieldInput = {
  node: MessageCreateInput;
};

export type MessageParentsDeleteFieldInput = {
  where?: Maybe<MessageParentsConnectionWhere>;
  delete?: Maybe<MessageDeleteInput>;
};

export type MessageParentsDisconnectFieldInput = {
  where?: Maybe<MessageParentsConnectionWhere>;
  disconnect?: Maybe<MessageDisconnectInput>;
};

export type MessageParentsEdgeAggregationWhereInput = {
  AND?: Maybe<Array<MessageParentsEdgeAggregationWhereInput>>;
  OR?: Maybe<Array<MessageParentsEdgeAggregationWhereInput>>;
  user_EQUAL?: Maybe<Scalars["ID"]>;
  createdAt_EQUAL?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: Maybe<Scalars["DateTime"]>;
  createdAt_GT?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: Maybe<Scalars["DateTime"]>;
  createdAt_GTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: Maybe<Scalars["DateTime"]>;
  createdAt_LT?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: Maybe<Scalars["DateTime"]>;
  createdAt_LTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: Maybe<Scalars["DateTime"]>;
};

export type MessageParentsFieldInput = {
  create?: Maybe<Array<MessageParentsCreateFieldInput>>;
  connect?: Maybe<Array<MessageParentsConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<MessageParentsConnectOrCreateFieldInput>>;
};

export type MessageParentsNodeAggregationWhereInput = {
  AND?: Maybe<Array<MessageParentsNodeAggregationWhereInput>>;
  OR?: Maybe<Array<MessageParentsNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  content_EQUAL?: Maybe<Scalars["String"]>;
  content_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  content_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  content_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  content_GT?: Maybe<Scalars["Int"]>;
  content_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  content_LONGEST_GT?: Maybe<Scalars["Int"]>;
  content_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  content_GTE?: Maybe<Scalars["Int"]>;
  content_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  content_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  content_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  content_LT?: Maybe<Scalars["Int"]>;
  content_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  content_LONGEST_LT?: Maybe<Scalars["Int"]>;
  content_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  content_LTE?: Maybe<Scalars["Int"]>;
  content_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  content_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  content_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  createdAt_EQUAL?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: Maybe<Scalars["DateTime"]>;
  createdAt_GT?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: Maybe<Scalars["DateTime"]>;
  createdAt_GTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: Maybe<Scalars["DateTime"]>;
  createdAt_LT?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: Maybe<Scalars["DateTime"]>;
  createdAt_LTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: Maybe<Scalars["DateTime"]>;
  updatedAt_EQUAL?: Maybe<Scalars["DateTime"]>;
  updatedAt_MIN_EQUAL?: Maybe<Scalars["DateTime"]>;
  updatedAt_MAX_EQUAL?: Maybe<Scalars["DateTime"]>;
  updatedAt_GT?: Maybe<Scalars["DateTime"]>;
  updatedAt_MIN_GT?: Maybe<Scalars["DateTime"]>;
  updatedAt_MAX_GT?: Maybe<Scalars["DateTime"]>;
  updatedAt_GTE?: Maybe<Scalars["DateTime"]>;
  updatedAt_MIN_GTE?: Maybe<Scalars["DateTime"]>;
  updatedAt_MAX_GTE?: Maybe<Scalars["DateTime"]>;
  updatedAt_LT?: Maybe<Scalars["DateTime"]>;
  updatedAt_MIN_LT?: Maybe<Scalars["DateTime"]>;
  updatedAt_MAX_LT?: Maybe<Scalars["DateTime"]>;
  updatedAt_LTE?: Maybe<Scalars["DateTime"]>;
  updatedAt_MIN_LTE?: Maybe<Scalars["DateTime"]>;
  updatedAt_MAX_LTE?: Maybe<Scalars["DateTime"]>;
};

export type MessageParentsUpdateConnectionInput = {
  node?: Maybe<MessageUpdateInput>;
};

export type MessageParentsUpdateFieldInput = {
  where?: Maybe<MessageParentsConnectionWhere>;
  update?: Maybe<MessageParentsUpdateConnectionInput>;
  connect?: Maybe<Array<MessageParentsConnectFieldInput>>;
  disconnect?: Maybe<Array<MessageParentsDisconnectFieldInput>>;
  create?: Maybe<Array<MessageParentsCreateFieldInput>>;
  delete?: Maybe<Array<MessageParentsDeleteFieldInput>>;
  connectOrCreate?: Maybe<Array<MessageParentsConnectOrCreateFieldInput>>;
};

export type MessageRelationInput = {
  author?: Maybe<MessageAuthorCreateFieldInput>;
  parents?: Maybe<Array<MessageParentsCreateFieldInput>>;
  children?: Maybe<Array<MessageChildrenCreateFieldInput>>;
};

/** Fields to sort Messages by. The order in which sorts are applied is not guaranteed when specifying many fields in one MessageSort object. */
export type MessageSort = {
  id?: Maybe<SortDirection>;
  content?: Maybe<SortDirection>;
  createdAt?: Maybe<SortDirection>;
  updatedAt?: Maybe<SortDirection>;
};

export type MessageUniqueWhere = {
  id?: Maybe<Scalars["ID"]>;
};

export type MessageUpdateInput = {
  content?: Maybe<Scalars["String"]>;
  author?: Maybe<MessageAuthorUpdateFieldInput>;
  parents?: Maybe<Array<MessageParentsUpdateFieldInput>>;
  children?: Maybe<Array<MessageChildrenUpdateFieldInput>>;
};

export type MessageWhere = {
  OR?: Maybe<Array<MessageWhere>>;
  AND?: Maybe<Array<MessageWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  content?: Maybe<Scalars["String"]>;
  content_NOT?: Maybe<Scalars["String"]>;
  content_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  content_NOT_IN?: Maybe<Array<Maybe<Scalars["String"]>>>;
  content_CONTAINS?: Maybe<Scalars["String"]>;
  content_NOT_CONTAINS?: Maybe<Scalars["String"]>;
  content_STARTS_WITH?: Maybe<Scalars["String"]>;
  content_NOT_STARTS_WITH?: Maybe<Scalars["String"]>;
  content_ENDS_WITH?: Maybe<Scalars["String"]>;
  content_NOT_ENDS_WITH?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_NOT?: Maybe<Scalars["DateTime"]>;
  createdAt_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  createdAt_NOT_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  createdAt_LT?: Maybe<Scalars["DateTime"]>;
  createdAt_LTE?: Maybe<Scalars["DateTime"]>;
  createdAt_GT?: Maybe<Scalars["DateTime"]>;
  createdAt_GTE?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_NOT?: Maybe<Scalars["DateTime"]>;
  updatedAt_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  updatedAt_NOT_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  updatedAt_LT?: Maybe<Scalars["DateTime"]>;
  updatedAt_LTE?: Maybe<Scalars["DateTime"]>;
  updatedAt_GT?: Maybe<Scalars["DateTime"]>;
  updatedAt_GTE?: Maybe<Scalars["DateTime"]>;
  author?: Maybe<UserWhere>;
  author_NOT?: Maybe<UserWhere>;
  authorAggregate?: Maybe<MessageAuthorAggregateInput>;
  parents?: Maybe<MessageWhere>;
  parents_NOT?: Maybe<MessageWhere>;
  parentsAggregate?: Maybe<MessageParentsAggregateInput>;
  children?: Maybe<MessageWhere>;
  children_NOT?: Maybe<MessageWhere>;
  childrenAggregate?: Maybe<MessageChildrenAggregateInput>;
  authorConnection?: Maybe<MessageAuthorConnectionWhere>;
  authorConnection_NOT?: Maybe<MessageAuthorConnectionWhere>;
  parentsConnection?: Maybe<MessageParentsConnectionWhere>;
  parentsConnection_NOT?: Maybe<MessageParentsConnectionWhere>;
  childrenConnection?: Maybe<MessageChildrenConnectionWhere>;
  childrenConnection_NOT?: Maybe<MessageChildrenConnectionWhere>;
};

export type UserConnectInput = {
  messages?: Maybe<Array<UserMessagesConnectFieldInput>>;
};

export type UserConnectOrCreateInput = {
  messages?: Maybe<Array<UserMessagesConnectOrCreateFieldInput>>;
};

export type UserConnectOrCreateWhere = {
  node: UserUniqueWhere;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  messages?: Maybe<UserMessagesFieldInput>;
};

export type UserDeleteInput = {
  messages?: Maybe<Array<UserMessagesDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  messages?: Maybe<Array<UserMessagesDisconnectFieldInput>>;
};

export type UserMessagesAggregateInput = {
  count?: Maybe<Scalars["Int"]>;
  count_LT?: Maybe<Scalars["Int"]>;
  count_LTE?: Maybe<Scalars["Int"]>;
  count_GT?: Maybe<Scalars["Int"]>;
  count_GTE?: Maybe<Scalars["Int"]>;
  AND?: Maybe<Array<UserMessagesAggregateInput>>;
  OR?: Maybe<Array<UserMessagesAggregateInput>>;
  node?: Maybe<UserMessagesNodeAggregationWhereInput>;
};

export type UserMessagesConnectFieldInput = {
  where?: Maybe<MessageConnectWhere>;
  connect?: Maybe<Array<MessageConnectInput>>;
};

export type UserMessagesConnectionSort = {
  node?: Maybe<MessageSort>;
};

export type UserMessagesConnectionWhere = {
  AND?: Maybe<Array<UserMessagesConnectionWhere>>;
  OR?: Maybe<Array<UserMessagesConnectionWhere>>;
  node?: Maybe<MessageWhere>;
  node_NOT?: Maybe<MessageWhere>;
};

export type UserMessagesConnectOrCreateFieldInput = {
  where: MessageConnectOrCreateWhere;
  onCreate: UserMessagesConnectOrCreateFieldInputOnCreate;
};

export type UserMessagesConnectOrCreateFieldInputOnCreate = {
  node: MessageCreateInput;
};

export type UserMessagesCreateFieldInput = {
  node: MessageCreateInput;
};

export type UserMessagesDeleteFieldInput = {
  where?: Maybe<UserMessagesConnectionWhere>;
  delete?: Maybe<MessageDeleteInput>;
};

export type UserMessagesDisconnectFieldInput = {
  where?: Maybe<UserMessagesConnectionWhere>;
  disconnect?: Maybe<MessageDisconnectInput>;
};

export type UserMessagesFieldInput = {
  create?: Maybe<Array<UserMessagesCreateFieldInput>>;
  connect?: Maybe<Array<UserMessagesConnectFieldInput>>;
  connectOrCreate?: Maybe<Array<UserMessagesConnectOrCreateFieldInput>>;
};

export type UserMessagesNodeAggregationWhereInput = {
  AND?: Maybe<Array<UserMessagesNodeAggregationWhereInput>>;
  OR?: Maybe<Array<UserMessagesNodeAggregationWhereInput>>;
  id_EQUAL?: Maybe<Scalars["ID"]>;
  content_EQUAL?: Maybe<Scalars["String"]>;
  content_AVERAGE_EQUAL?: Maybe<Scalars["Float"]>;
  content_LONGEST_EQUAL?: Maybe<Scalars["Int"]>;
  content_SHORTEST_EQUAL?: Maybe<Scalars["Int"]>;
  content_GT?: Maybe<Scalars["Int"]>;
  content_AVERAGE_GT?: Maybe<Scalars["Float"]>;
  content_LONGEST_GT?: Maybe<Scalars["Int"]>;
  content_SHORTEST_GT?: Maybe<Scalars["Int"]>;
  content_GTE?: Maybe<Scalars["Int"]>;
  content_AVERAGE_GTE?: Maybe<Scalars["Float"]>;
  content_LONGEST_GTE?: Maybe<Scalars["Int"]>;
  content_SHORTEST_GTE?: Maybe<Scalars["Int"]>;
  content_LT?: Maybe<Scalars["Int"]>;
  content_AVERAGE_LT?: Maybe<Scalars["Float"]>;
  content_LONGEST_LT?: Maybe<Scalars["Int"]>;
  content_SHORTEST_LT?: Maybe<Scalars["Int"]>;
  content_LTE?: Maybe<Scalars["Int"]>;
  content_AVERAGE_LTE?: Maybe<Scalars["Float"]>;
  content_LONGEST_LTE?: Maybe<Scalars["Int"]>;
  content_SHORTEST_LTE?: Maybe<Scalars["Int"]>;
  createdAt_EQUAL?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: Maybe<Scalars["DateTime"]>;
  createdAt_GT?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: Maybe<Scalars["DateTime"]>;
  createdAt_GTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: Maybe<Scalars["DateTime"]>;
  createdAt_LT?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: Maybe<Scalars["DateTime"]>;
  createdAt_LTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: Maybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: Maybe<Scalars["DateTime"]>;
  updatedAt_EQUAL?: Maybe<Scalars["DateTime"]>;
  updatedAt_MIN_EQUAL?: Maybe<Scalars["DateTime"]>;
  updatedAt_MAX_EQUAL?: Maybe<Scalars["DateTime"]>;
  updatedAt_GT?: Maybe<Scalars["DateTime"]>;
  updatedAt_MIN_GT?: Maybe<Scalars["DateTime"]>;
  updatedAt_MAX_GT?: Maybe<Scalars["DateTime"]>;
  updatedAt_GTE?: Maybe<Scalars["DateTime"]>;
  updatedAt_MIN_GTE?: Maybe<Scalars["DateTime"]>;
  updatedAt_MAX_GTE?: Maybe<Scalars["DateTime"]>;
  updatedAt_LT?: Maybe<Scalars["DateTime"]>;
  updatedAt_MIN_LT?: Maybe<Scalars["DateTime"]>;
  updatedAt_MAX_LT?: Maybe<Scalars["DateTime"]>;
  updatedAt_LTE?: Maybe<Scalars["DateTime"]>;
  updatedAt_MIN_LTE?: Maybe<Scalars["DateTime"]>;
  updatedAt_MAX_LTE?: Maybe<Scalars["DateTime"]>;
};

export type UserMessagesUpdateConnectionInput = {
  node?: Maybe<MessageUpdateInput>;
};

export type UserMessagesUpdateFieldInput = {
  where?: Maybe<UserMessagesConnectionWhere>;
  update?: Maybe<UserMessagesUpdateConnectionInput>;
  connect?: Maybe<Array<UserMessagesConnectFieldInput>>;
  disconnect?: Maybe<Array<UserMessagesDisconnectFieldInput>>;
  create?: Maybe<Array<UserMessagesCreateFieldInput>>;
  delete?: Maybe<Array<UserMessagesDeleteFieldInput>>;
  connectOrCreate?: Maybe<Array<UserMessagesConnectOrCreateFieldInput>>;
};

export type UserOptions = {
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: Maybe<Array<Maybe<UserSort>>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type UserRelationInput = {
  messages?: Maybe<Array<UserMessagesCreateFieldInput>>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  id?: Maybe<SortDirection>;
  createdAt?: Maybe<SortDirection>;
  updatedAt?: Maybe<SortDirection>;
};

export type UserUniqueWhere = {
  id?: Maybe<Scalars["ID"]>;
};

export type UserUpdateInput = {
  messages?: Maybe<Array<UserMessagesUpdateFieldInput>>;
};

export type UserWhere = {
  OR?: Maybe<Array<UserWhere>>;
  AND?: Maybe<Array<UserWhere>>;
  id?: Maybe<Scalars["ID"]>;
  id_NOT?: Maybe<Scalars["ID"]>;
  id_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_NOT_IN?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_CONTAINS?: Maybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: Maybe<Scalars["ID"]>;
  id_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: Maybe<Scalars["ID"]>;
  id_ENDS_WITH?: Maybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdAt_NOT?: Maybe<Scalars["DateTime"]>;
  createdAt_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  createdAt_NOT_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  createdAt_LT?: Maybe<Scalars["DateTime"]>;
  createdAt_LTE?: Maybe<Scalars["DateTime"]>;
  createdAt_GT?: Maybe<Scalars["DateTime"]>;
  createdAt_GTE?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt_NOT?: Maybe<Scalars["DateTime"]>;
  updatedAt_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  updatedAt_NOT_IN?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  updatedAt_LT?: Maybe<Scalars["DateTime"]>;
  updatedAt_LTE?: Maybe<Scalars["DateTime"]>;
  updatedAt_GT?: Maybe<Scalars["DateTime"]>;
  updatedAt_GTE?: Maybe<Scalars["DateTime"]>;
  messages?: Maybe<MessageWhere>;
  messages_NOT?: Maybe<MessageWhere>;
  messagesAggregate?: Maybe<UserMessagesAggregateInput>;
  messagesConnection?: Maybe<UserMessagesConnectionWhere>;
  messagesConnection_NOT?: Maybe<UserMessagesConnectionWhere>;
};

export interface IdAggregateInput {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInput {
  min?: boolean;
  max?: boolean;
}
export interface UserAggregateInput {
  count?: boolean;
  id?: IdAggregateInput;
  createdAt?: DateTimeAggregateInput;
  updatedAt?: DateTimeAggregateInput;
}

export declare class UserModel {
  public find(args?: {
    where?: UserWhere;

    options?: UserOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<User[]>;
  public count(args?: { where?: UserWhere }): Promise<number>;
  public create(args: {
    input: UserCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateUsersMutationResponse>;
  public update(args: {
    where?: UserWhere;
    update?: UserUpdateInput;
    connect?: UserConnectInput;
    disconnect?: UserDisconnectInput;
    create?: UserCreateInput;
    connectOrCreate?: UserConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateUsersMutationResponse>;
  public delete(args: {
    where?: UserWhere;
    delete?: UserDeleteInput;
    context?: any;
    rootValue: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: UserWhere;

    aggregate: UserAggregateInput;
    context?: any;
    rootValue?: any;
  }): Promise<UserAggregateSelection>;
}

export interface IdAggregateInput {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInput {
  min?: boolean;
  max?: boolean;
}
export interface StringAggregateInput {
  shortest?: boolean;
  longest?: boolean;
}
export interface MessageAggregateInput {
  count?: boolean;
  id?: IdAggregateInput;
  content?: StringAggregateInput;
  createdAt?: DateTimeAggregateInput;
  updatedAt?: DateTimeAggregateInput;
}

export declare class MessageModel {
  public find(args?: {
    where?: MessageWhere;

    options?: MessageOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Message[]>;
  public count(args?: { where?: MessageWhere }): Promise<number>;
  public create(args: {
    input: MessageCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateMessagesMutationResponse>;
  public update(args: {
    where?: MessageWhere;
    update?: MessageUpdateInput;
    connect?: MessageConnectInput;
    disconnect?: MessageDisconnectInput;
    create?: MessageCreateInput;
    connectOrCreate?: MessageConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateMessagesMutationResponse>;
  public delete(args: {
    where?: MessageWhere;
    delete?: MessageDeleteInput;
    context?: any;
    rootValue: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: MessageWhere;

    aggregate: MessageAggregateInput;
    context?: any;
    rootValue?: any;
  }): Promise<MessageAggregateSelection>;
}

export interface ModelMap {
  User: UserModel;
  Message: MessageModel;
}
