# Extra voorbeelden

In dit onderdeel vind je een aantal voorbeeld applicaties die in de les gebruikt worden of als extra oefening kunnen dienen.

## Cookie Clicker (AsyncStorage)

```typescript expo={"dependencies":"@react-native-async-storage/async-storage"}
import { Text, View, Button, Pressable, ActivityIndicator, Animated } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useRef, useState } from "react";

interface Item {
    id: number;
    price: number;
    name: string;
    amount: number;
    cps: number;
}

const DEFAULT_ITEMS: Item[] = [
    { id: 0, price: 15, name: "pointer", amount: 0, cps: 0.1 },
    { id: 1, price: 100, name: "grandma", amount: 0, cps: 1 },
    { id: 2, price: 1100, name: "farm", amount: 0, cps: 8 },
    { id: 3, price: 12000, name: "mine", amount: 0, cps: 47 },
    { id: 4, price: 130000, name: "factory", amount: 0, cps: 260 },
    { id: 5, price: 1400000, name: "bank", amount: 0, cps: 1400 },
];

const Cookie = ({ onPress }: { onPress: () => void }) => {
    const scale = useRef(new Animated.Value(1)).current;

    const handlePress = () => {
        Animated.sequence([
            Animated.timing(scale, {
                toValue: 1.1,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(scale, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }),
        ]).start();
        onPress();
    };

    return (
        <Pressable onPress={handlePress}>
            <Animated.View style={{ borderRadius: 100, width: 200, height: 200, backgroundColor: "#A8926F", transform: [{ scale }] }}>
                
            </Animated.View>
        </Pressable>
    )
}

const CookieClicker = () => {
    const [counter, setCounter] = useState<number>(0);
    const [inventory, setInventory] = useState<Item[] | undefined>(undefined);
    const cps = inventory ? inventory.reduce((total, item) => total + (item.cps * item.amount), 0) : 0;

    const buyItem = (id: number) => {
        let foundItem: Item | undefined = DEFAULT_ITEMS.find(item => item.id === id);
        if (!foundItem || !inventory) return;
        if (counter < foundItem.price) {
            alert("Not enough cookies!");
            return;
        }
        setCounter(counter => counter - foundItem.price);
        setInventory(inventory.map(item => {
            if (item.id === id) {
                return { ...item, amount: item.amount + 1 }
            } else {
                return item;
            }
        }));
    }

    useEffect(() => {
        const cb = setInterval(() => {
            setCounter(prev => {
                if (!inventory) return prev;
                return prev + cps * 0.1;
            });
        }, 100);

        return () => {
            clearInterval(cb);
        }
    }, [inventory, cps]);

    useEffect(() => {
        const loadData = async () => {
            const value = await AsyncStorage.getItem("counter");
            if (value !== null) {
                setCounter(parseInt(value));
            }
            const inventory = await AsyncStorage.getItem("inventory");
            if (inventory !== null) {
                setInventory(JSON.parse(inventory));
            } else {
                setInventory(DEFAULT_ITEMS);
            }
        }
        loadData();
    }, []);

    useEffect(() => {
        const storeData = async () => {
            await AsyncStorage.setItem("counter", counter.toString());
        }
        storeData();
    }, [counter]);

    useEffect(() => {
        const storeData = async () => {
            await AsyncStorage.setItem("inventory", JSON.stringify(inventory));
        }
        if (inventory !== undefined) {
            storeData();
        }
    }, [inventory]);

    const handlePress = () => {
        setCounter(counter => counter + 1);
    };

    if (inventory === undefined) {
        return (
            <View>
                <ActivityIndicator animating={true} />
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "stretch",
            }}
        >
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View style={{ margin: 20, alignItems: "center" }}>
                    <Text style={{ fontSize: 40 }}>{Math.floor(counter)}</Text>
                    <Text>per second {cps.toFixed(1)}</Text>
                </View>
                <Cookie onPress={handlePress} />
            </View>


            <View style={{ flex: 1 }}>
                {
                    inventory.map(item => <Button key={item.id} title={`${item.name} (${item.price}) - Owned: ${item.amount}`} onPress={() => buyItem(item.id)} />)
                }
                <Button title="Reset Game" onPress={async () => {
                    setCounter(0);
                    setInventory(DEFAULT_ITEMS);
                    await AsyncStorage.removeItem("counter");
                    await AsyncStorage.removeItem("inventory");
                }} />
            </View>


        </View>
    );
}

export default CookieClicker;
```