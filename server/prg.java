import java.util.*;
class Main{
    //Stone Paper scissor with computer
    public static int generate(){
        Random r = new Random();//Random class to generate random number 
        int n = 1+r.nextInt(3);//Generate random number between 1 to 3
        return n;
    }
    public static int humanChoice(){
        Scanner sc = new Scanner(System.in);//Scanner class
        System.out.println("Choose : \nEnter 1 for rock\nEnter 2 for paper\nEnter 3 for scissor");
        int n = sc.nextInt();
        while(n<1 || n>3){//validation
            System.out.println("Invalid choice. Enter again");
            n = sc.nextInt();
        }
        sc.close();
        return n;
    }
    public static void displyComp(int ch){//display computer choice
        System.out.println("Computer choice is: "+ch);
    }
    public static void finalDecision(int ch1, int ch2){
        if(ch1==ch2){
            System.out.println("Match Draw");
        }
        else if(ch1==1 && ch2==2){
            System.out.println("Computer wins");
        }
        else if(ch1==1 && ch2==3){
            System.out.println("You win");
        }
        else if(ch1==2 && ch2==1){
            System.out.println("You win");
        }
        else if(ch1==2 && ch2==3){
            System.out.println("Computer wins");
        }
        else if(ch1==3 && ch2==1){
            System.out.println("Computer wins");
        }
        else if(ch1==3 && ch2==2){
            System.out.println("You win");
        }
    }
    public static void main(String[] args){
        int ch1 = humanChoice();//Take input from user
        int ch2 = generate();//Generate random number for computer
        displyComp(ch2);//Display computer choice
        finalDecision(ch1,ch2);//Display final result
    }

}