import java.util.*;
public class Solution {
    static Map<Character, String> m1 = new HashMap<Character, String>();//Map for storing alphabet as key and the key that needs to be pressed for it to appear. 
    static Map<Character, Integer> m2 = new HashMap<Character, Integer>();//Map for storing alphabet as key and the number of keypad to which it belongs to
 
    static {
        //Initializing the maps
        m1.put('a', "2");//We will be able to access 'a' by pressing 2
        m1.put('b', "22");//We will be able to access 'b' by pressing 2 twice
        m1.put('c', "222");//We will be able to access 'c' by pressing 2 three times
        m1.put('d', "3");
        m1.put('e', "33");
        m1.put('f', "333");
        m1.put('g', "4");
        m1.put('h', "44");
        m1.put('i', "444");
        m1.put('j', "5");
        m1.put('k', "55");
        m1.put('l', "555");
        m1.put('m', "6");
        m1.put('n', "66");
        m1.put('o', "666");
        m1.put('p', "7");
        m1.put('q', "77");
        m1.put('r', "777");
        m1.put('s', "7777");
        m1.put('t', "8");
        m1.put('u', "88");
        m1.put('v', "888");
        m1.put('w', "9");
        m1.put('x', "99");
        m1.put('y', "999");
        m1.put('z', "9999");
        m1.put(' ', "0");//We will be able to access ' ' by pressing 0
 
        m2.put('a', 1);//'a' is contained in the keypad 1
        m2.put('b', 1);//'b' is contained in the keypad 1
        m2.put('c', 1);//'c' is contained in the keypad 1
        m2.put('d', 2);//'d' is contained in the keypad 2
        m2.put('e', 2);
        m2.put('f', 2);
        m2.put('g', 3);
        m2.put('h', 3);
        m2.put('i', 3);
        m2.put('j', 4);
        m2.put('k', 4);
        m2.put('l', 4);
        m2.put('m', 5);
        m2.put('n', 5);
        m2.put('o', 5);
        m2.put('p', 6);
        m2.put('q', 6);
        m2.put('r', 6);
        m2.put('s', 6);
        m2.put('t', 7);
        m2.put('u', 7);
        m2.put('v', 7);
        m2.put('w', 8);
        m2.put('x', 8);
        m2.put('y', 8);
        m2.put('z', 8);
        m2.put(' ', 9);
    }
    private static String solve(String nextLine) {
        char[] nextLineCharArray = nextLine.toCharArray();//Converting the string to char array
        char prev = nextLineCharArray[0];//Storing the first character of the string in prev
        StringBuilder s = new StringBuilder();//Initializing the string builder
        s.append(m1.get(prev));//Appending the keypad number to the string builder
        for (int i = 1; i < nextLineCharArray.length; i++) {
            char curr = nextLineCharArray[i];//Storing the current character in curr
            if (m2.get(prev) == m2.get(curr)) {//If the keypad number of the previous character is same as the current character
                s.append(" ");//Appending a space to the string builder
            }
            prev = curr;//Storing the current character in prev
            s.append(m1.get(prev));//Appending the required keypad number to the string builder
        }
        return s.toString();
    }
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = Integer.parseInt(in.nextLine());//Storing the number of test cases in n
        for (int i = 0; i < n; i++) {
            System.out.println("Case #" + (i + 1) + ": "
                    + solve(in.nextLine()));//Calling the solve function and printing the output
        }
    }
 
}