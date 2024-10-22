public class demo{
    public static void printIn(int n){
        if(n==1){
            System.out.println(n);
            return;
        }
        printIn(n-1);
        System.out.println(n);
    }
    public static void main(String[] args) {
        printIn(10);
    }
}