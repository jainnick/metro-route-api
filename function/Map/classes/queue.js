class PriorityQueue
{
    constructor()
    {
        //used to store elements in the priority queue
        this.collection = [];
    }
    //element contains the node and its time
    enqueue(element)
    {
        if (this.isEmpty())
        {
            this.collection.push(element);
        }
        else
        {
            let added = false;
            for (var i=0; i < this.collection.length; i++)
            {
                // time is used as the priority when the element is added to the priority queue.
                if (element[1] < this.collection[i][1])
                {
                    this.collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added)
            {
                this.collection.push(element); 
            }
        }
        this.print();
    };
    dequeue()
    {
        //shift() removes the first element
        let value = this.collection.shift();

        this.print();
        return value;
    };
    
    isEmpty()
    {
        return (this.collection.length === 0);
    }
    print()
    {
        console.log("printing priority queue...");
        for (var i = 0; i < this.collection.length; i++)
        {   
            console.log(this.collection[i]);
            }
    }

}
export default PriorityQueue