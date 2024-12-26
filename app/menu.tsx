import { StyleSheet, Text, View, FlatList } from 'react-native';

const MENU_ITEMS = [
  {
    id: 1,
    name: 'Iced Coffee',
    detail: 'A refreshing cold coffee beverage.',
  },
  {
    id: 2,
    name: 'Hot Coffee',
    detail: 'A classic, warm coffee drink.',
  },
  {
    id: 3,
    name: 'Cafe Latte',
    detail: 'A smooth blend of coffee and steamed milk.',
  },
];

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}  // リスト全体にパディングを追加
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDetail}>{item.detail}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  listContainer: {
    paddingHorizontal: 20,  // 横方向のパディング
    paddingBottom: 20,      // 下方向のパディング
  },
  itemContainer: {
    backgroundColor: 'white', // アイテムの背景色
    marginBottom: 15,         // アイテム間のスペース
    padding: 15,              // アイテムの内側の余白
    borderRadius: 8,          // 角を丸める
    shadowColor: '#000',      // アイテムに影をつける
    shadowOffset: { width: 0, height: 2 },  // 影の位置
    shadowOpacity: 0.1,       // 影の透明度
    shadowRadius: 4,          // 影のぼかし具合
    elevation: 3,             // Androidでの影
  },
  itemName: {
    fontSize: 24, // 名前のフォントサイズ
    fontWeight: 'bold',
    color: '#333', // テキスト色
  },
  itemDetail: {
    fontSize: 16, // 詳細のフォントサイズ
    color: '#777', // 詳細のテキスト色
  },
});
